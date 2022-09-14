import { Component, OnInit } from '@angular/core';
import iCharacter from "../../../models/iCharacter";
import {CharactersApiService} from "../../../services/characters-api.service";
import {StorageService} from "../../../services/storage.service";
import {ModalService} from "../../../services/modal.service";
import {catchError, tap} from "rxjs";
import {ModalSamecharService} from "../../../services/modal-samechar.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  private keyStorage = 'characters';

  characters: iCharacter[] = [];
  showedCharacters: iCharacter[];
  loadMoreCount = 5;
  deleteId: number;
  loading: boolean = false;
  modalTitle: string;

  constructor(
    private characterService: CharactersApiService,
    private localStore: StorageService,
    public modalService: ModalService,
    public modalSameCharService: ModalSamecharService
  ) {}

  ngOnInit() : void {
    if(this.characters) {
      this.characters = this.localStore.getData<iCharacter[]>(this.keyStorage)!;
      this.initShowedCharacters();
    }
  }

  addCharacterById(id: number) {
    this.loading = true;
    this.characterService.getCharacterById(id)
      .subscribe(char => {
        if(this.checkSameId(char.id)) return
        this.characters.unshift({...char});
        this.localStore.saveData(this.keyStorage, this.characters);
        this.initShowedCharacters();
        this.loading = false;
      });
  }

  deleteCharacterById(id: number) {
    this.characters = this.characters.filter(char => char.id !== id)
    this.localStore.saveData(this.keyStorage, this.characters);
    this.initShowedCharacters();
  }

  deleteCharacter(isDelete: boolean){
    if(!isDelete || !this.deleteId) return;
    this.deleteCharacterById(this.deleteId);
  }

  private checkSameId(id: number) {
    for (let i: number = 0; i < this.characters.length; i++) {
      if (this.characters[i].id === id) {
        this.modalTitle = `You\'ve already added the character ${this.characters[i].name} with ID: ${id}`
        this.modalSameCharService.open()
        // alert(`You've already added the character ${this.characters[i].name} with ID: ${id}`);
        this.loading = false;
        return true;
      }
    }
    return false;
  }

  private initShowedCharacters() {
    this.showedCharacters = this.characters.slice(0, this.loadMoreCount);
  }

  loadMore() {
    this.loadMoreCount += 5;
    this.initShowedCharacters();
  }

}
