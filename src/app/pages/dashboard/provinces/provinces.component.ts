import { Component, OnInit, Input, OnChanges, SimpleChanges, Output, EventEmitter } from '@angular/core';
import { GithubService } from 'src/app/commons/services/github.service';
import { Observable } from 'rxjs';
import { Province } from '../../../commons/models/province';
import { MatButtonToggleChange } from '@angular/material/button-toggle';

@Component({
  selector: 'app-provinces',
  templateUrl: './provinces.component.html',
  styleUrls: ['./provinces.component.scss']
})
export class ProvincesComponent implements OnInit, OnChanges {

  @Input()
  district: string;

  @Output()
  clickItems: EventEmitter<Province[]> = new EventEmitter<Province[]>();

  provinces: (Province & {disabled: boolean})[];

  checkGroup: 'all' | 'none';

  constructor(private github: GithubService) { }

  ngOnInit() {
    this.checkGroup = 'all';
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.district.currentValue !== changes.district.previousValue) {
      this.ngOnInit();
      this.github.getProvincesOf(changes.district.currentValue)
        .subscribe(p => this.provinces = p as (Province & {disabled: boolean})[]);
    }
  }

  toggle(province: Province & {disabled: boolean}) {
    province.disabled = !province.disabled;
    this.calculateCheckGroup();
    this.clickItems.next([province]);
  }

  onCheckGroupChange(event: MatButtonToggleChange) {
    switch (event.value) {
      case 'all':
        this.setAllDisabledAs(false);
        break;
      case 'none':
        this.setAllDisabledAs(true);
        break;
    }
    this.clickItems.next([...this.provinces]); // cloning will trigger changes in child components...
  }

  private calculateCheckGroup() {
    if (this.provinces.every(p => !p.disabled)) {
      this.checkGroup = 'all';
    } else if (this.provinces.every(p => p.disabled)) {
      this.checkGroup = 'none';
    } else {
      this.checkGroup = null;
    }
  }

  private setAllDisabledAs(value: boolean) {
    this.provinces.map(p => {
                    p.disabled = value;
                    return p;
                  });
  }
}
