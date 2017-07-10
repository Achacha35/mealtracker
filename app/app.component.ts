import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
  <div class="container">
  <div class="header">
    <h1>Meal Tracker</h1>
    </div>
    <div *ngFor="let currentTask of tasks">
    </div>
    <task-list
    [childTaskList]="tasks"
    (clickSender)="showDetails($event)"
    ></task-list>
    <div *ngIf="selectedTask">
      <h2>Edit Task</h2>
      <div>
        <label>Enter Food: </label>
        <input [(ngModel)]="selectedTask.name">
      </div>
      <div>
        <label>Enter details:</label>
        <input [(ngModel)]="selectedTask.details">
      </div>
      <div>
        <label>Enter Calories:</label>
        <input [(ngModel)]="selectedTask.calories">
        <button (click)="finishedEditing()">Done</button>
      </div>
    </div>
    <new-task
    (newTaskSender)="addTask($event)"
    ></new-task>
</div>

  `
})

export class AppComponent {
  public tasks: Task[] = [
    new Task("Beef burger", "Had a lot of beef", 354),
    new Task("Cheddar cheese", "Had a really bad odour", 501),
    new Task("Sandwich", "Very unfulfilling", 340),
    new Task("Chicken", "Just the right amount of spice", 460),
    new Task("Salmon", "Too fishy", 366),
    new Task("Big Mac", "Extremely fulfilling", 550),


  ];
  selectedTask: Task = null;
  showDetails(clickedTask: Task) {
    this.selectedTask = clickedTask;
  }
  addTask(newTaskFromChild: Task) {
    this.tasks.push(newTaskFromChild);
  }
  finishedEditing() {
    this.selectedTask = null;
  }

}

export class Task {
  public done: boolean = false;
  constructor(public name: string, public details: string, public calories: number) { }
}
