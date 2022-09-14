import {Component, Input, OnInit} from '@angular/core';
import iCharacter from "../../models/iCharacter";
import iEpisode from "../../models/iEpisode";


@Component({
  selector: 'app-character_detail',
  templateUrl: './character-detail.component.html',
  styleUrls: ['./character-detail.component.scss']
})
export class CharacterDetailComponent implements OnInit {
  @Input() character: iCharacter;
  @Input() episodes: iEpisode[];

  constructor() { }

  ngOnInit(): void {
  }

  checkIsDead() : boolean {
    return this.character.status === 'Dead';
  }

}
