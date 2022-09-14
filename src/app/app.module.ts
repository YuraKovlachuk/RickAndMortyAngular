import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {SearchBoxModule} from "./components/search_box/search-box.module";
import {HeaderModule} from "./components/header/header.module";
import {CharacterModule} from "./components/character/character.module";
import {HttpClientModule} from "@angular/common/http";
import {ModalModule} from "./components/modal/modal.module";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {CharacterDetailModule} from "./components/character_detail/character-detail.module";
import { HomeComponent } from './components/pages/home/home.component';
import { DetailInfoComponent } from './components/pages/detail_info/detail-info.component';
import {RouterModule, Routes} from "@angular/router";
import { SpinnerComponent } from './components/spinner/spinner.component';
import { ErrorComponent } from './components/error/error.component';
import {ModalSamecharModule} from "./components/modal-samechar/modal-samechar.module";

const appRoutes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'character/:id', component: DetailInfoComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DetailInfoComponent,
    SpinnerComponent,
    ErrorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SearchBoxModule,
    HeaderModule,
    CharacterModule,
    HttpClientModule,
    ModalModule,
    BrowserAnimationsModule,
    CharacterDetailModule,
    RouterModule.forRoot(appRoutes),
    ModalSamecharModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
