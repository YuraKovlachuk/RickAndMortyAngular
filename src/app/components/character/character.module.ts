import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CharacterComponent} from "./character.component";
import {DecodeHtmlStringPipe} from "../../pipes/decode-html-string.pipe";
import {ModalComponent} from "../modal/modal.component";
import {RouterLink} from "@angular/router";

@NgModule({
  declarations: [CharacterComponent, DecodeHtmlStringPipe],
    imports: [
        CommonModule,
        RouterLink
    ],
  exports: [CharacterComponent]
})
export class CharacterModule { }
