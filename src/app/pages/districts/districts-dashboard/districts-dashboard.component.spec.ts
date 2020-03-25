import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DistrictsDashboardComponent } from './districts-dashboard.component';

describe('DistrictsDashboardComponent', () => {
  let component: DistrictsDashboardComponent;
  let fixture: ComponentFixture<DistrictsDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DistrictsDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DistrictsDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
