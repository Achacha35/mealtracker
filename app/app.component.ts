import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
  <div class="container">
  <h1>Meal Tracker</h1>
  <h3> Log foods that you have eaten today!</h3>
  <div class="name" *ngFor="let name of names">
  <div class="detail" *ngFor="let detail of details">
  <div class="calorie" *ngFor="let calorie of calories">
  <p><span class="title">{{name}}</span></p>
  <p>{{detail}}</p>
  <p>Calories:{{calories}}
  </div>
  </div>
  </div>
  </div>
  `
})

export class AppComponent {
  names = ["Hamburger"];
  details=["Didn't get a soda or cheese on my burger",];
  calories=["354",];
}
