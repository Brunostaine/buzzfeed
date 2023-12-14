import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { QuizzComponent } from 'src/app/components/quizz/quizz.component';

@NgModule({
  declarations: [HomeComponent, QuizzComponent],
  imports: [CommonModule, HomeRoutingModule],
})
export class HomeModule {}
