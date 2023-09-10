import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { PorfolioComponent } from './porfolio/porfolio.component';
import { ContactComponent } from './contact/contact.component';

const routes: Routes = [
  {path:'', redirectTo:"home",pathMatch:"full" , title:"Hello There "},
  {path:'home', component:HomeComponent , title:"Hello There "},
  {path:'about', component:AboutComponent,title:"About Here" },
  {path:'portfolio', component:PorfolioComponent,title:"Gallery" },
  {path:'contact', component:ContactComponent,title:"Gallery" },
  {path:'**', component:AboutComponent , title:"Error 404" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
