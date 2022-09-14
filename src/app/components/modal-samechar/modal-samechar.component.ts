import {Component, HostListener, Input, OnInit} from '@angular/core';
import {ModalSamecharService} from "../../services/modal-samechar.service";
import {animate, style, transition, trigger} from "@angular/animations";

@Component({
  selector: 'app-modal-samechar',
  templateUrl: './modal-samechar.component.html',
  styleUrls: ['./modal-samechar.component.scss'],
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
export class ModalSamecharComponent implements OnInit {
  @Input() title: string;

  @HostListener('document:keydown', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent): void {
    if (event.key === 'Enter') {
      this.onClick();
    }
    if (event.key === 'Escape') {
      this.modalService.close();
    }
  }

  constructor(public modalService: ModalSamecharService) { }

  ngOnInit(): void {
  }

  onClick() {
    this.modalService.close();
  }

}
