import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule} from '@angular/forms';


import { HeroesRoutingModule } from './heroes-routing.module';
import { HeroesListComponent } from '../heroes-list/heroes-list.component';
import { HeroDetailComponent } from '../hero-detail/hero-detail.component';


@NgModule({
  declarations: [
    HeroesListComponent,
    HeroDetailComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    HeroesRoutingModule
  ]
})
export class HeroesModule { }
