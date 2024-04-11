import { Component } from '@angular/core';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [],
  templateUrl: './card.component.html',
  styleUrl: './card.component.less',
  inputs:['card_data']
})
export class CardComponent {
  tempstr = 'Duis aute irure dolor in <br> velit esse cillum dolore.'
  card_data:any;
}
