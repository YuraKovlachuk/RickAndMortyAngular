import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SearchBoxComponent} from "./search-box.component";
import {ReactiveFormsModule} from "@angular/forms";



@NgModule({
  declarations: [SearchBoxComponent],
    imports: [
        CommonModule,
        ReactiveFormsModule
    ],
  exports: [SearchBoxComponent]
})
export class SearchBoxModule { }
