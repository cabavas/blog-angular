import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-big-card',
  standalone: true,
  imports: [
    RouterLink
  ],
  templateUrl: './big-card.component.html',
  styleUrl: './big-card.component.css',
})
export class BigCardComponent {
  @Input()
  photoCover: string = 'https://t.ctcdn.com.br/gALBpOOLuD2ysbABT4c6AL71ynI=/1244x700/smart/i759818.jpeg';
  @Input()
  cardTitle: string = 'Ad ut deserunt do enim anim quis.';
  @Input()
  cardDescription: string = 'Incididunt ea ut ipsum labore cillum commodo proident nulla veniam elit nostrud et ex. Esse dolor ex id labore nisi ut pariatur id adipisicing. Adipisicing occaecat consectetur laborum consequat minim tempor minim aliquip ea labore. Nostrud elit labore nostrud id cillum sit minim sit nisi deserunt proident proident duis dolore.';
  @Input()
  id: string = '0';
}
