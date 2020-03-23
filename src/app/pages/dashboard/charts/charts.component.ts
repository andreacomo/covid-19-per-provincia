import { Component, OnInit, Input, OnChanges, SimpleChanges, ViewChild } from '@angular/core';
import { GithubService } from 'src/app/commons/services/github.service';
import { ChartDataSets, ChartOptions } from 'chart.js';
import { ProvinceData } from 'src/app/commons/models/province-data';
import { Label, BaseChartDirective } from 'ng2-charts';
import { Colors } from 'src/app/commons/models/colors';
import { LinearChartProvider } from './linear-chart-provider';
import { LocalDataService } from 'src/app/commons/services/local-data.service';

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

  plugins: any[];

  @ViewChild('chart', { static: true })
  chartComponent: BaseChartDirective;

  constructor(private github: GithubService,
              private dataService: LocalDataService) { }

  ngOnInit() {
    this.dataService.getMilestones()
      .subscribe(m => {
        this.options = LinearChartProvider.getOptions(m);
      });
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.district.currentValue !== changes.district.previousValue) {
      this.github.getAllDataInDistrict(changes.district.currentValue)
        .subscribe(data => {
          this.chartData = LinearChartProvider.createChartData(data);

          this.labels = LinearChartProvider.createLabels(data);

          this.plugins = LinearChartProvider.getPlugins();
        });
    }
  }
}
