import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { GithubService } from 'src/app/commons/services/github.service';
import { Observable } from 'rxjs';
import { Province } from 'src/app/commons/models/province';
import { ProvinceData } from 'src/app/commons/models/province-data';

@Component({
  selector: 'app-provinces-dashboard',
  templateUrl: './provinces-dashboard.component.html',
  styleUrls: ['./provinces-dashboard.component.scss']
})
export class ProvincesDashboardComponent implements OnInit {

  selectedDistrict: string;

  selectedProvinces: Province[];

  constructor() { }

  ngOnInit() {
  }

  districtChanged(event) {
    this.selectedDistrict = event;
  }

  provinceClicked(event: Province[]) {
    this.selectedProvinces = event;
  }
}
