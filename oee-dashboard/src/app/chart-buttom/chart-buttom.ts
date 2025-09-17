import { Component } from '@angular/core';

import { MatIconModule } from '@angular/material/icon';


@Component({
  selector: 'app-chart-buttom',
  imports: [MatIconModule],
  templateUrl: './chart-buttom.html',
  styleUrl: './chart-buttom.scss'
})
export class ChartButtom {
  oeeTopN=[{product:'Book',total:5422,psc: 250},
    {product:'Bike',total:4422,psc: 50},
    

  ]

}
