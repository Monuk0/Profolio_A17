import { Component } from '@angular/core';
import { HeaderComponent } from '../components/header/header.component';
import { RouterOutlet } from '@angular/router';
import { SideBarComponent } from '../components/side-bar/side-bar.component';
import { HomePageComponent } from '../pages/home-page/home-page.component';
import { FooterComponent } from '../components/footer/footer.component';
import { TaskBarComponent } from '../components/task-bar/task-bar.component';


@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [
    HeaderComponent,
    SideBarComponent,
    HomePageComponent,
    RouterOutlet,
    FooterComponent,
    TaskBarComponent
  ],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.less',
})
export class PortfolioComponent {
  constructor() {}
  tab_select!: string;
  receiveData(data: any) {
    this.tab_select = data;
  }
}
