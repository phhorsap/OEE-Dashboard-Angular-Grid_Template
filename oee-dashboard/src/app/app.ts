import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { KpiCard } from './kpi-card/kpi-card';
import { Hearder } from './hearder/hearder';
import { ChartTop } from './chart-top/chart-top';
import { ChartButtom } from './chart-buttom/chart-buttom';
import { Footer } from './footer/footer';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,KpiCard,Hearder,ChartTop,ChartButtom,Footer],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('oee-dashboard');
}
