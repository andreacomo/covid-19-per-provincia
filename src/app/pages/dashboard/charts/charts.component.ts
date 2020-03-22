import { Component, OnInit, Input, OnChanges, SimpleChanges, ViewChild } from '@angular/core';
import { GithubService } from 'src/app/commons/services/github.service';
import { ChartDataSets, ChartOptions, ChartTooltipItem } from 'chart.js';
import { ProvinceData } from 'src/app/commons/models/province-data';
import { Label, BaseChartDirective } from 'ng2-charts';
import { Colors } from 'src/app/commons/models/colors';

@Component({
  selector: 'app-charts',
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.scss']
})
export class ChartsComponent implements OnInit, OnChanges {

  @Input()
  district: string;

  chartData: ChartDataSets[];

  labels: Label[];

  options: ChartOptions;

  @ViewChild('chart', { static: true })
  chartComponent: BaseChartDirective;

  constructor(private github: GithubService) { }

  ngOnInit() {
    this.options = {
      responsive: true,
      aspectRatio: 2,
      legend: {
        display: true,
        position: 'top',
        align: 'center',
        labels: {
          boxWidth: 13,
          fontFamily: 'Roboto, \'Helvetica Neue\', sans-serif'
        }
      },
      tooltips: {
        enabled: true,
        callbacks: {
          footer: (item, data) => {
            const i = item[0];
            const previous = data.datasets[i.datasetIndex].data[i.index - 1] as number;
            const current = parseInt(i.value, 10);
            const incrementPercent = (((current - previous) / previous) * 100);
            const sing = incrementPercent > 0 ? '+' : '';
            if (!isNaN(incrementPercent) && isFinite(incrementPercent)) {
              return `${sing}${incrementPercent.toFixed(2)}% rispetto al giorno precedente`;
            } else {
              return '';
            }
          }
        }
      },
      layout: {
        padding: {
            left: 0,
            right: 20,
            top: 0,
            bottom: 0
        }
      }
    };
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.district.currentValue !== changes.district.previousValue) {
      this.github.getAllDataInDistrict(changes.district.currentValue)
        .subscribe(data => {

          let index = 0;
          this.chartData = Object.entries(data)
            .filter(([code]) => code)
            .map(([code, values]) => {
              const color = Colors.SUPPORTED[index++];
              return {
                label: code,
                data: (values as ProvinceData[]).map(v => v.totale_casi),
                fill: false,
                pointRadius: 5,
                backgroundColor: color,
                borderColor: color,
                pointBackgroundColor: color
              };
            });

          this.labels = (Object.entries(data)[1][1] as ProvinceData[])
                                                                .map(v => v.data.split(' ')[0])
                                                                .map(v => {
                                                                  const split = v.split('-');
                                                                  return `${split[2]}/${split[1]}`;
                                                                });
        });
    }
  }


}
