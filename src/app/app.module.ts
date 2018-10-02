import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Lesson1Component } from './lesson1/lesson1.component';
import { FormsModule} from '@angular/forms';
import { Lesson2Component } from './lesson2/lesson2.component';
import { Lesson3Component } from './lesson3/lesson3.component';
import {NgPipesModule} from 'ngx-pipes';

@NgModule({
  declarations: [
    AppComponent,
    Lesson1Component,
    Lesson2Component,
    Lesson3Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgPipesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
