import { Component } from '@angular/core';
import { GameZoneComponent } from '../../components/game-zone/game-zone.component';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [GameZoneComponent],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.less'
})
export class HomePageComponent {
  githubLink = "https://github.com/Monuk0"
}
