import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartButtom } from './chart-buttom';

describe('ChartButtom', () => {
  let component: ChartButtom;
  let fixture: ComponentFixture<ChartButtom>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChartButtom]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChartButtom);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
