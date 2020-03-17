import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-nested-list';

  data = {"Home": { "Home__Sub": ["home--1", "home--2", "home--3"]}, "About": ["about--1", "about--2", "about--3"], "Contact": ["contact--1", "contact--2", "contact--3"]};
}
