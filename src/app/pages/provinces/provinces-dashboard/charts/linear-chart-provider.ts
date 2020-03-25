import { ChartDataSets, ChartOptions, ChartSize } from 'chart.js';
import { DistrictDetailedData } from 'src/app/commons/models/district-detailed-data';
import { Colors } from 'src/app/commons/models/colors';
import { Label } from 'ng2-charts';
import * as pluginAnnotations from 'chartjs-plugin-annotation';
import { Milestone } from 'src/app/commons/models/milestone';

export class LinearChartProvider {

    static getOptions(milestones: Milestone[]): (ChartOptions & { annotation: any }) {
        let labelGaps = 1;
        return {
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
            },
            annotation: {
                annotations: milestones.map(m => {
                    return {
                        type: 'line',
                        mode: 'vertical',
                        scaleID: 'x-axis-0',
                        value: this.dateStringAsLabel(m.date),
                        borderColor: 'orange',
                        borderWidth: 1,
                        label: {
                            enabled: true,
                            position: 'top',
                            yAdjust: (150 / labelGaps++),
                            fontColor: '#555',
                            backgroundColor: '#dddd',
                            rotation: 120,
                            content: m.description
                        }
                    };
                })
            }
          };
    }

    static createChartData(data: DistrictDetailedData): ChartDataSets[] {
        let index = 0;
        return Object.entries(data)
            .filter(([code]) => code)
            .map(([code, values]) => {
              const color = Colors.SUPPORTED[index++];
              return {
                label: code,
                data: values.map(v => v.totale_casi),
                fill: false,
                pointRadius: 5,
                backgroundColor: color,
                borderColor: color,
                pointBackgroundColor: color
              };
            });
    }

    static createLabels(data: DistrictDetailedData): Label[] {
        return (Object.entries(data)[1][1])
                            .map(v => this.dateStringAsLabel(v.data));
    }

    static getPlugins(): any[] {
        return [pluginAnnotations];
    }

    private static dateStringAsLabel(date: string): string {
        const datePart = date.split('T')[0];
        const split = datePart.split('-');
        return `${split[2]}/${split[1]}`;
    }
}
