import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { GithubService } from 'src/app/commons/services/github.service';

@Component({
  selector: 'app-district',
  templateUrl: './district.component.html',
  styleUrls: ['./district.component.scss']
})
export class DistrictComponent implements OnInit {

  districts$: Observable<string[]>;

  constructor(private github: GithubService) { }

  ngOnInit() {
    this.districts$ = this.github.getDistricts();
  }

}
