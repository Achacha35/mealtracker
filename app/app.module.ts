import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { AppComponent }   from './app.component';
import { TaskListComponent } from './task-list.component';

import { NewTaskComponent } from './new-task.component';
import { CompletenessPipe } from './completeness.pipe';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule
  ],
  declarations: [
    AppComponent,
    TaskListComponent,
    NewTaskComponent,
    CompletenessPipe,
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
