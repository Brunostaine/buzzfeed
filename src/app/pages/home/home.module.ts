import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { QuizzModule } from 'src/app/components/quizz/quizz.module';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';

@NgModule({
  declarations: [HomeComponent],
  imports: [CommonModule, HomeRoutingModule, QuizzModule],
})
export class HomeModule {}
