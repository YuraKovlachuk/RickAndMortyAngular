import {Component, OnInit, SimpleChanges} from '@angular/core';
import iCharacter from "./models/iCharacter";
import {CharactersApiService} from "./services/characters-api.service";
import {StorageService} from "./services/storage.service";
import {ModalService} from "./services/modal.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{

  constructor() {}

  ngOnInit() : void {
  }
}
