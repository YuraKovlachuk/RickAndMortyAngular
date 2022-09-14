import {Component, EventEmitter, HostListener, Input, OnInit, Output} from '@angular/core';
import {ModalService} from "../../services/modal.service";
import {style, state, animate, transition, trigger} from '@angular/animations';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
  animations: [
    trigger('fadeInOut', [
      transition(':enter', [   // :enter is alias to 'void => *'
        style({opacity:0}),
        animate(100, style({opacity:1})),
      ]),
      transition(':leave', [   // :leave is alias to '* => void'
        animate(100, style({opacity:0}))
      ])
    ])
  ]
})
export class ModalComponent implements OnInit {
  @Input() title: string;
  @Output() chooseEvent = new EventEmitter<boolean>()

  @HostListener('document:keydown', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent): void {
    if (event.key === 'Enter') {
      this.onClick();
    }
    if (event.key === 'Escape') {
      this.modalService.close();
    }
  }

  constructor(public modalService: ModalService) { }

  ngOnInit(): void {
  }

  onClick() {
    this.modalService.close();
    this.chooseEvent.emit(true);
  }

}
