import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { GithubService } from 'src/app/commons/services/github.service';
import { Observable } from 'rxjs';
import { Province } from 'src/app/commons/models/province';
import { ProvinceData } from 'src/app/commons/models/province-data';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  selectedDistrict: string;

  selectedProvince: Province;

  constructor() { }

  ngOnInit() {
  }

  districtChanged(event) {
    this.selectedDistrict = event;
  }

  provinceClicked(event: Province) {
    this.selectedProvince = { ...event }; // cloning object will trigger onChanges on child components
  }
}
