import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs';
import { GithubService } from 'src/app/commons/services/github.service';

@Component({
  selector: 'app-district',
  templateUrl: './district.component.html',
  styleUrls: ['./district.component.scss']
})
export class DistrictComponent implements OnInit {

  districts$: Observable<string[]>;

  @Output()
  selected: EventEmitter<string> = new EventEmitter<string>();

  constructor(private github: GithubService) { }

  ngOnInit() {
    this.districts$ = this.github.getDistricts();
  }

  onChange(event) {
    this.selected.next(event.value);
  }

}
