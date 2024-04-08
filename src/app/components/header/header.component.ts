import { Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.less',
  outputs: ['tab_value'],
})
export class HeaderComponent {
  tab_Active: string = '_hello';
  @Output() tab_value = new EventEmitter<string>();
  constructor(
    private _router: Router,
  ) {}

  ngOnInit(){
    this.setHeader(this._router.url)
  }

  tab_select(event: any) {
    this.tab_Active = event.target.innerHTML;
    this.tab_value.emit(this.tab_Active);
    if (this.tab_Active == '_hello') {
      this._router.navigateByUrl('portfolio/home-page');
    } else if (this.tab_Active == '_about_me') {
      this._router.navigateByUrl('portfolio/about-page');
    } else if (this.tab_Active == '_project') {
      this._router.navigateByUrl('portfolio/project-page');
    }
  }

  setHeader(url: string) {
    let tab_select:string ="";
    if (url == '/portfolio/home-page' ||url == '/portfolio') {
      tab_select = '_hello'
    } else if (url == '/portfolio/about-page') {
      tab_select = '_about_me'
    } else if (url == '/portfolio/project-page') {
      tab_select = '_project'
    }
    const event = {
      target : {
        innerHTML : tab_select
      }
    }
    this.tab_select(event)
  }
}
