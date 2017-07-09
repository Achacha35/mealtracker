import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
  <div class="container">
  <div class="header">
    <h1>Meal Tracker</h1>
    </div>
    <div *ngFor="let currentTask of tasks">
      <h2><strong>{{ currentTask.name }}</strong></h2>
      <h4>Details: {{ currentTask.details }}</h4>
      <h4>Calories: {{ currentTask.calories }}</h4>


      <button (click)="showDetails(currentTask)">Edit</button>
    </div>
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
    new Task("Hamburger", "Good", "365"),
    new Task("Cheese", "Smelt", "360"),
    new Task("Sandwich", "Very good", "350"),

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
  constructor(public name: string, public details: string, public calories: string) { }
}
