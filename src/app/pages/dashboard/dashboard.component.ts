import { Component, OnInit } from '@angular/core';
import { GithubService } from 'src/app/commons/services/github.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  data$: any;

  constructor(private github: GithubService) { }

  ngOnInit() {
    // this.data$ = this.github.getData();
    this.data$ = this.github.getDistricts();
  }

}
