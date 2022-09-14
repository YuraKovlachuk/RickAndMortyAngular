import {Component, Input, OnInit} from '@angular/core';
import iEpisode from "../../../models/iEpisode";

@Component({
  selector: 'app-episode',
  templateUrl: './episode.component.html',
  styleUrls: ['./episode.component.scss']
})
export class EpisodeComponent implements OnInit {
  @Input() episode: iEpisode;

  constructor() { }

  ngOnInit(): void {
  }

  changeNameFormat() : string {
    if(this.episode.name.length >= 18) {
      return `${this.episode.name.slice(0, 18)}...`
    } else {
      return this.episode.name
    }
  }

}
