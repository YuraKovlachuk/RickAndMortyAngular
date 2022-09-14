import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ModalSamecharComponent} from "./modal-samechar.component";



@NgModule({
  declarations: [ModalSamecharComponent],
  imports: [
    CommonModule
  ],
  exports:[ModalSamecharComponent]
})
export class ModalSamecharModule { }
