import { Component, OnInit } from '@angular/core';
import {
	trigger,
	state,
	style,
	transition,
	animate,
  keyframes,
  query,
  stagger,
} from '@angular/animations';

@Component({
  selector: 'app-card-container',
  templateUrl: './card-container.component.html',
  styleUrls: ['./card-container.component.scss'],
  animations: [
    trigger('scaling', [
			state('active', style({
				transform: 'translateX(0)'
			})),
			transition('void => *', [
				animate(1500, keyframes([
					style({
						transform: 'scale(0.90)',
						offset: 0.1
					}),
					style({
						transform: 'scale(0.92)',
						offset: 0.2
					}),
					style({
						transform: 'scale(0.94)',
						offset: 0.3
					}),
					style({
						transform: 'scale(1)',
						offset: 1
					})
				]))
			]),
    ]),
    trigger('bump', [
			state('void', style({
        transform: 'translateY(300px)',
        opacity: 0
			})),
			transition('void => *', [
        animate(2000, keyframes([
          style({ transform: 'translateY(40px)', opacity: 0.4, offset: 0.2 }),
          style({ transform: 'translateY(0px)', opacity: 1, offset: 1 })
        ]))
      ]),
    ]),
    trigger('bump2', [
			state('void', style({
        transform: 'translateY(300px)',
        opacity: 0
			})),
      transition('* => slideIn', [
        query('.card', stagger('100ms',
          animate(1500, keyframes([
            style({ transform: 'translateY(40px)', opacity: 0.4, offset: 0.2}),
            style({ transform: 'translateY(0px)', opacity: 1, offset: 1 })
          ]))
        )),
      ]),
		]),
  ]
})
export class CardContainerComponent implements OnInit {

  public active: boolean = true;

  constructor() { }

  ngOnInit() {
  }

}
