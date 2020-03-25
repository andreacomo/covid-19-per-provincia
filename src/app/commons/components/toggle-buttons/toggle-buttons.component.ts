import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { MatButtonToggleChange } from '@angular/material/button-toggle';

@Component({
  selector: 'app-toggle-buttons',
  templateUrl: './toggle-buttons.component.html',
  styleUrls: ['./toggle-buttons.component.scss']
})
export class ToggleButtonsComponent implements OnInit {

  @Input()
  value: 'all' | 'none';

  @Input()
  list: {disabled: boolean}[];

  @Output()
  valueChange: EventEmitter<MatButtonToggleChange> = new EventEmitter<MatButtonToggleChange>();

  constructor() { }

  ngOnInit() {
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
    this.valueChange.next(event);
  }

  private setAllDisabledAs(value: boolean) {
    this.list.map(p => {
                    p.disabled = value;
                    return p;
                  });
  }
}
