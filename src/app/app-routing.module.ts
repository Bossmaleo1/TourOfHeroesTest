import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { HeroesComponent } from './heroes/heroes.component';

const routes: Routes = [
  {path: 'heroes', component: HeroesComponent},
  {path: 'dashboard', component: DashboardComponent},
  {path: '', redirectTo: '/dashboard', pathMatch: 'full'},
  {path: 'detail/:id', component: HeroDetailComponent}
];

/*const appRoutes = [
  {path: 'crisis-center', component: CrisisListComponent},
  //{path: 'heroes', component: HeroesListComponent},
  {path: '', redirectTo: '/heroes' , pathMatch: 'full'},
  {path: '**', component: PageNotFoundComponent},
];*/

@NgModule({
  imports: [RouterModule.forRoot(routes, { enableTracing: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
