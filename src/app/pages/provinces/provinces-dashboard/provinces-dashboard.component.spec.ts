import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProvincesDashboardComponent } from './provinces-dashboard.component';

describe('ProvincesDashboardComponent', () => {
  let component: ProvincesDashboardComponent;
  let fixture: ComponentFixture<ProvincesDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProvincesDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProvincesDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
