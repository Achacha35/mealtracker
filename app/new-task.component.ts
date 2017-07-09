import { Component, Output, EventEmitter } from '@angular/core';
import { Task } from './task.model';

@Component({
  selector: 'new-task',
  template: `
    <h1>New Task</h1>
    <div>
      <label>Enter Food:</label>
      <input #newName>
    </div>
    <div>
      <label>Enter details:</label>
      <input #newDetails>
    </div>

    <div>
      <label>Enter calories:</label>
      <input #newCalories>

      <button (click)="
        addClicked(newName.value, newDetails.value, newCalories);
        newName.value='';
        newDetails.value='';
        newCalories.value='';
      ">Add</button>
    </div>
  `
})

export class NewTaskComponent {
  @Output() newTaskSender = new EventEmitter();
  addClicked(name: string, details: string, calories: string) {
    var newTaskToAdd: Task = new Task(name, details, calories);
    this.newTaskSender.emit(newTaskToAdd);
  }
}
