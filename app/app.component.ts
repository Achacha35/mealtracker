import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
  <div class="container">
  <h1>Meal Tracker</h1>
  <h3> Log foods that you have eaten today!</h3>
  <div class="row">
  <div class="col-md-4">
  <h1>Food</h1>
  <div class="name" *ngFor="let name of names">
  <ul>
  <li><span class="title">{{name}}</span></li>
  </ul>
  </div>
  </div>
  <div class="col-md-4">
  <h1>Details</h1>
    <div class="detail" *ngFor="let detail of details">
    <ul>
    <li><span class="title">{{detail}}</span></li>
    </ul>
  </div>
  </div>
  <div class="col-md-4">
  <h1>Calories</h1>
    <div class="calorie" *ngFor="let calorie of calories">
    <ul>
    <li><span class="title">{{calories}}</span></li>
    </ul>
  </div>
  </div>
  </div>





  <form (submit)="addTask(newTask.value)">
  <label>Add Food: </label>
  <input type="text" #newTask />
</form>

</div>
  `
})

export class AppComponent {
  names = ["Hamburger"];
  details=["Didn't get a soda",];
  calories=["354",];

  addTask(newTask) {
    this.names.push(newTask);
  }
}
