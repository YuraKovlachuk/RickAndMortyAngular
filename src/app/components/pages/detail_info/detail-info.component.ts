import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {CharactersApiService} from "../../../services/characters-api.service";
import iCharacter from "../../../models/iCharacter";
import iEpisode from "../../../models/iEpisode";

@Component({
  selector: 'app-detail_info',
  templateUrl: './detail-info.component.html',
  styleUrls: ['./detail-info.component.scss']
})
export class DetailInfoComponent implements OnInit {
  character: iCharacter;
  episodes: iEpisode[] = [];
  loading: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private characterService: CharactersApiService
  ){ }

  ngOnInit(): void {
    this.loading = true;
    const id = this.route.snapshot.paramMap.get('id')!;
    this.characterService.getCharacterById(+id).subscribe(
      char => {
        this.character = {...char};
        this.getAllEpisodes();
        this.loading = false;
      }
    );
  }

  private getAllEpisodes() {
    this.character.episode.forEach(url => {
      this.characterService.getEpisode(url).subscribe(
        episode => this.episodes.push({...episode})
      );
    });
  }

}
