import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MealTrackerComponent }   from './app.component';

@NgModule({
  imports: [BrowserModule],
  declarations: [ MealTrackerComponent ],
  bootstrap:    [ MealTrackerComponent ]
})

export class MealTrackerModule { }
