import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-graphics-dona',
  templateUrl: './graphics-dona.component.html',
  styleUrls: ['./graphics-dona.component.css']
})
export class GraphicsDonaComponent implements OnInit {

  @Input('chartLabels') doughnutChartLabels: string[] = [];
  @Input('chartData') doughnutChartData: number[] = [];
  @Input('chartType') doughnutChartType: string = '';

  constructor() { }

  ngOnInit() {
  }

}
