import { Component, Input, OnInit } from '@angular/core';
import { ViewChild } from '@angular/core';
import { Chart, ChartConfiguration, ChartEvent, ChartType } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';


@Component({
  selector: 'chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss']
})
export class ChartComponent {
  @Input() data!: any
  ngOnInit() {
    const color = this.getRandomColor()
    this.lineChartData = {
      datasets: [

        {
          data: this.data.values.map((val: { x: number, y: number }) => val.y),
          label: this.data.name,
          yAxisID: 'y1',
          backgroundColor: '#80ff8035',
          borderColor: '#ffd700',
          pointBackgroundColor: 'transparent',
          pointBorderColor: 'transparent',
          pointHoverBackgroundColor: '#fff',
          pointHoverBorderColor: 'rgba(148,159,177,0.8)',
          fill: 'origin',
        }
      ],
      labels: this.data.values.map((val: { x: number, y: number }) => new Date(val.x * 1000).toLocaleDateString())//['January', 'February', 'March', 'April', 'May', 'June', 'July']
    }
  }
  private newLabel?= 'New label';

  constructor() {
    // Chart.register(Annotation)
  }

  public lineChartData: ChartConfiguration['data'] = {
    datasets: []
  };

  public lineChartOptions: ChartConfiguration['options'] = {
    elements: {
      line: {
        tension: 0.5,
        borderWidth:1
      }
    },
    scales: {
      // We use this empty structure as a placeholder for dynamic theming.
      y:
      {
        position: 'left',
      },
      y1: {
        position: 'right',
        grid: {
          color: 'rgba(0,140,140,0.4)',
        },
        ticks: {
          color: 'grey'
        }
      }
    },

    plugins: {
      legend: { display: false },
      // annotation: {
      //   annotations: [
      //     {
      //       type: 'line',
      //       scaleID: 'x',
      //       value: 'March',
      //       borderColor: 'orange',
      //       borderWidth: 2,
      //       label: {
      //         display: true,
      //         position: 'center',
      //         color: 'orange',
      //         content: 'LineAnno',
      //         font: {
      //           weight: 'bold'
      //         }
      //       }
      //     },
      //   ],
      // }
    }
  };

  public lineChartType: ChartType = 'line';

  @ViewChild(BaseChartDirective) chart?: BaseChartDirective;

  private static generateNumber(i: number): number {
    return Math.floor((Math.random() * (i < 2 ? 100 : 1000)) + 1);
  }

  public randomize(): void {
    for (let i = 0; i < this.lineChartData.datasets.length; i++) {
      for (let j = 0; j < this.lineChartData.datasets[i].data.length; j++) {
        this.lineChartData.datasets[i].data[j] = ChartComponent.generateNumber(i);
      }
    }
    this.chart?.update();
  }

  // events
  public chartClicked({ event, active }: { event?: ChartEvent, active?: {}[] }): void {
    // console.log(event, active);
  }

  public chartHovered({ event, active }: { event?: ChartEvent, active?: {}[] }): void {
    // console.log(event, active);
  }

  public hideOne(): void {
    const isHidden = this.chart?.isDatasetHidden(1);
    this.chart?.hideDataset(1, !isHidden);
  }

  public pushOne(): void {
    this.lineChartData.datasets.forEach((x, i) => {
      const num = ChartComponent.generateNumber(i);
      x.data.push(num);
    });
    this.lineChartData?.labels?.push(`Label ${this.lineChartData.labels.length}`);

    this.chart?.update();
  }

  public changeColor(): void {
    this.lineChartData.datasets[0].borderColor = 'blue';
    this.lineChartData.datasets[0].backgroundColor = `rgba(0, 0, 255, 0.3)`;

    this.chart?.update();
  }

  public changeLabel(): void {
    const tmp = this.newLabel;
    this.newLabel = this.lineChartData.datasets[2].label;
    this.lineChartData.datasets[2].label = tmp;

    this.chart?.update();
  }
  public getRandomColor = () => {
    const colorChars = '0123456789abcdef'
    var colorStr = '#'
    for (var i = 0; i < 6; i++) {
        colorStr += colorChars.charAt(Math.random() * colorChars.length)
    }
    return colorStr
}
}

