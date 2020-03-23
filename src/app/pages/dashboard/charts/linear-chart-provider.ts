import { ChartDataSets, ChartOptions } from 'chart.js';
import { DistrictDetailedData } from 'src/app/commons/models/district-detailed-data';
import { Colors } from 'src/app/commons/models/colors';
import { Label } from 'ng2-charts';

export class LinearChartProvider {

    static getOptions(): ChartOptions {
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
                            .map(v => v.data.split(' ')[0])
                            .map(v => {
                                const split = v.split('-');
                                return `${split[2]}/${split[1]}`;
                            });
    }
}
