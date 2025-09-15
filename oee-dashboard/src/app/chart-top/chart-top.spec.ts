import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartTop } from './chart-top';

describe('ChartTop', () => {
  let component: ChartTop;
  let fixture: ComponentFixture<ChartTop>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChartTop]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChartTop);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
