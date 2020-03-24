import { Component, OnInit, Input, OnChanges, SimpleChanges, ViewChild } from '@angular/core';
import { GithubService } from 'src/app/commons/services/github.service';
import { ChartDataSets, ChartOptions } from 'chart.js';
import { Label, BaseChartDirective } from 'ng2-charts';
import { LinearChartProvider } from './linear-chart-provider';
import { LocalDataService } from 'src/app/commons/services/local-data.service';
import { Province } from 'src/app/commons/models/province';

@Component({
  selector: 'app-charts',
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.scss']
})
export class ChartsComponent implements OnInit, OnChanges {

  @Input()
  district: string;

  @Input()
  toggleProvinces: Province[];

  chartData: ChartDataSets[];

  labels: Label[];

  options: ChartOptions;

  plugins: any[];

  @ViewChild(BaseChartDirective, { static: false })
  chart: BaseChartDirective;

  constructor(private github: GithubService,
              private dataService: LocalDataService) { }

  ngOnInit() {
    this.dataService.getMilestones()
      .subscribe(m => {
        this.options = LinearChartProvider.getOptions(m);
      });
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.district != null && changes.district.currentValue) {
      this.github.getAllDataInDistrict(changes.district.currentValue)
        .subscribe(data => {
          this.chartData = LinearChartProvider.createChartData(data);

          this.labels = LinearChartProvider.createLabels(data);

          this.plugins = LinearChartProvider.getPlugins();
        });
    }

    if (changes.toggleProvinces != null && changes.toggleProvinces.currentValue) {
      changes.toggleProvinces.currentValue.forEach(p => {
        const dataSetIndex = this.chartData
          .map(d => d.label)
          .indexOf(p.code);
        this.chart.hideDataset(dataSetIndex, p.disabled);
      });
    }
  }
}
