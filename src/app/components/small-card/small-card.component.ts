import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-small-card',
  standalone: true,
  imports: [
    RouterLink
  ],
  templateUrl: './small-card.component.html',
  styleUrl: './small-card.component.css'
})
export class SmallCardComponent {
  @Input()
  photoCover: string = "https://t.ctcdn.com.br/gALBpOOLuD2ysbABT4c6AL71ynI=/1244x700/smart/i759818.jpeg";
  @Input()
  cardTitle: string = "Ipsum elit fugiat Lorem proident ad nisi esse nisi magna commodo ea.";
  @Input()
  id:string = "0";
}
