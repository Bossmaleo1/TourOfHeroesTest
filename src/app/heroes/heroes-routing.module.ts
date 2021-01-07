import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HeroDetailComponent } from '../hero-detail/hero-detail.component';
import { HeroesListComponent } from '../heroes-list/heroes-list.component';

const heroesRoutes: Routes = [
  {path: 'heroes', component: HeroesListComponent , data: { animation: 'heroes' } },
  {path: 'hero/:id', component: HeroDetailComponent , data : { animation: 'hero' } }
];

@NgModule({
  imports: [RouterModule.forChild(heroesRoutes)],
  exports: [RouterModule]
})
export class HeroesRoutingModule { }
