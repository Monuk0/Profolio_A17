import { Routes } from '@angular/router';
// import { ProfolioComponent } from './profolio/profolio.component';

import { HomePageComponent } from './pages/home-page/home-page.component';
import { AboutPageComponent } from './pages/about-page/about-page.component';
import { ProjectPageComponent } from './pages/project-page/project-page.component';
import { PortfolioComponent } from './portfolio/portfolio.component';




export const routes: Routes = [
    { path: '',   redirectTo: 'portfolio/home-page', pathMatch: 'full' },
    {
        path:'portfolio',
        component:PortfolioComponent,
        children:[
            {
            path:'',
            component:HomePageComponent     
            },
            {
                path:'home-page',
                component:HomePageComponent     
            },
            {
                path:'about-page',
                component:AboutPageComponent     
            },
            {
                path:'project-page',
                component:ProjectPageComponent     
            },
    ]
    },
    
];

