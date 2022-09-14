import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ModalService {
  isVisible$ = new BehaviorSubject<boolean>(false);

  close() {this.isVisible$.next(false);}

  open() {this.isVisible$.next(true);}
}
