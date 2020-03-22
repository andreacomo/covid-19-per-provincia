import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { GithubService } from 'src/app/commons/services/github.service';
import { ChartDataSets, ChartOptions } from 'chart.js';
import { ProvinceData } from 'src/app/commons/models/province-data';
import { Label } from 'ng2-charts';

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
        enabled: true
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

          this.chartData = Object.entries(data)
            .filter(([code, values]) => code)
            .map(([code, values]) => {
              return {
                label: code,
                data: (values as ProvinceData[]).map(v => v.totale_casi)
              };
            });

          this.labels = (Object.entries(data)[1][1] as ProvinceData[]).map(v => v.data);
        });
    }
  }

}
