import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {isEmpty} from "rxjs";

@Component({
  selector: 'app-search_box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.scss']
})
export class SearchBoxComponent implements OnInit {
  @Output() charIdEvent = new EventEmitter<number>;

  form = new FormGroup({
    id: new FormControl<number|null>(null, [
      Validators.required,
      Validators.max(826),
      Validators.min(1)
    ])
  })

  get id() {
    return this.form.controls.id as FormControl;
  }

  constructor() { }

  ngOnInit(): void {
  }

  addNewCharacter(id: number) {
    if(!id) return;
    this.charIdEvent.emit(id)
  }
}
