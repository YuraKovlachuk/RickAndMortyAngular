import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import iCharacter from "../../models/iCharacter";
import {ModalService} from "../../services/modal.service";

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.scss'],

})
export class CharacterComponent implements OnInit {
  @Input() character: iCharacter;
  @Output() deleteIdEvent = new EventEmitter<number>;

  constructor(public modelService: ModalService) { }

  ngOnInit(): void {
  }

  checkIsDead() : boolean {
    return this.character.status === 'Dead';
  }

  deleteEvent(id: number) {
    this.deleteIdEvent.emit(id);
    this.modelService.open();
  }

}
