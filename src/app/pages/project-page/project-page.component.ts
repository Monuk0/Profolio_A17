import { Component } from '@angular/core';
import { CardComponent } from '../../components/card/card.component';

@Component({
  selector: 'app-project-page',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './project-page.component.html',
  styleUrl: './project-page.component.less',
})
export class ProjectPageComponent {
  card_List = [
    {
      id: 1,
      text_content: 'Duis aute irure dolor in <br> velit esse cillum dolore.',
      img_url: "assets/image/Rectangle 42.png",
      projectIn : { lang_id: 1, lang: 'react', icon: 'assets/svg/Technologies logos.svg'}
    },
    {
      id: 2,
      text_content: 'Duis aute irure dolor in <br> velit esse cillum dolore.',
      img_url: 'assets/image/Rectangle 42 (1).png',
      projectIn : { lang_id: 1, lang: 'reactjs', icon: 'assets/svg/Technologies logos.svg'}
    },
    {
      id: 3,
      text_content: 'Duis aute irure dolor in <br> velit esse cillum dolore.',
      img_url: "assets/image/Rectangle 42 (2).png",
      projectIn : { lang_id: 2, lang: 'Vuejs', icon: 'assets/svg/Technologies logos.svg'}
    },
  ];
}
