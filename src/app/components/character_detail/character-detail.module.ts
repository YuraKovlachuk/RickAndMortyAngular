import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CharacterDetailComponent} from "./character-detail.component";
import { EpisodeComponent } from './episode/episode.component';



@NgModule({
  declarations: [CharacterDetailComponent, EpisodeComponent],
  imports: [
    CommonModule
  ],
  exports: [CharacterDetailComponent]
})
export class CharacterDetailModule { }
