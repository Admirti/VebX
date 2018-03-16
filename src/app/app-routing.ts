import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ServicesComponent } from './services/services.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ContactComponent } from './contact/contact.component';
import { Child } from './auth/auth.routing';
import { MessagexComponent } from './messagex/messagex.component';
import { FacebookComponent } from './facebook/facebook.component';
import { InstagramComponent } from './instagram/instagram.component';
import { TwitterComponent } from './twitter/twitter.component';

const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent},
    { path: 'facebook', component: FacebookComponent},
    { path: 'instagram', component: InstagramComponent},
    { path: 'twitter', component: TwitterComponent},
    // { path: 'about', component: AboutComponent},
    { path: 'contact', component: ContactComponent},
    { path: 'portfolio', component: PortfolioComponent},
    { path: 'services', component: ServicesComponent},
    { path: 'message', component: MessagexComponent, children: Child},
    { path: '**', redirectTo: '404', pathMatch: 'full'},
    { path: '404', component: PageNotFoundComponent}
  ];
  
  @NgModule({
   imports: [RouterModule.forRoot(routes)],
   exports: [RouterModule]
    
  })
  export class AppRoutingModule { }