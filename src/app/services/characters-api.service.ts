import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import iCharacter from "../models/iCharacter";
import {catchError, Observable, retry, throwError} from "rxjs";
import iEpisode from "../models/iEpisode";
import {ErrorService} from "./error.service";

@Injectable({
  providedIn: 'root'
})
export class CharactersApiService {

  constructor(
    private http: HttpClient,
    private errorService: ErrorService
  ) { }

  getCharacterById(id: number) : Observable<iCharacter> {
    return this.http.get<iCharacter>(`https://rickandmortyapi.com/api/character/${id}`).
      pipe(
        retry(2),
        catchError(this.errorHandler.bind(this))
    )
  }

  getEpisode(url: string): Observable<iEpisode> {
    return this.http.get<iEpisode>(url).pipe(
      catchError(this.errorHandler.bind(this))
    );
  }

  errorHandler(error: HttpErrorResponse) {
    this.errorService.handle(error.message);
    return throwError(() => error.message);
  }
}
