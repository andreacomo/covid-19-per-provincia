import { Component, OnInit } from '@angular/core';
import { GithubService } from 'src/app/commons/services/github.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  data$: any;

  districts$: Observable<string[]>;

  constructor(private github: GithubService) { }

  ngOnInit() {
    // this.data$ = this.github.getData();
    this.districts$ = this.github.getDistricts();
  }

}
