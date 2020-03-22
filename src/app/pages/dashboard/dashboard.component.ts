import { Component, OnInit } from '@angular/core';
import { GithubService } from 'src/app/commons/services/github.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  selectedDistrict: string;

  constructor() { }

  ngOnInit() {
  }

  districtChanged(event) {
    this.selectedDistrict = event;
  }
}
