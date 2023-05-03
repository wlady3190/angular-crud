import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { NosotrosComponent } from './components/nosotros/nosotros.component';
import { PersonalComponent } from './components/personal/personal.component';

const routes: Routes = [
{path:'home', component: HomeComponent},
{path:'nosotros', component: NosotrosComponent},
{path:'personal', component: PersonalComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
