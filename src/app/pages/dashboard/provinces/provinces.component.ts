import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { GithubService } from 'src/app/commons/services/github.service';
import { Observable } from 'rxjs';
import { Province } from '../../../commons/models/province';

@Component({
  selector: 'app-provinces',
  templateUrl: './provinces.component.html',
  styleUrls: ['./provinces.component.scss']
})
export class ProvincesComponent implements OnInit, OnChanges {

  @Input()
  district: string;

  provinces$: Observable<Province[]>;

  constructor(private github: GithubService) { }

  ngOnInit() {

  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.district.currentValue !== changes.district.previousValue) {
      this.provinces$ = this.github.getProvincesOf(changes.district.currentValue);
    }
  }

}
