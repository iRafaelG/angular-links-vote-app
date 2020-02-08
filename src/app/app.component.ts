import { Component } from '@angular/core';
import { Link } from './link/link.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  links: Link[]; // Link is our class or data type 

  constructor() { // When the component is created, the constructor is executed
    this.links = [
      new Link('Angular', 'https://angular.io', 100),
      new Link('Google', 'https://google.com', 30),
      new Link('Youtube', 'https://youtube', 101)
    ]
  }

  addLink(title: HTMLInputElement, link: HTMLInputElement) { // This is an event, not a function even if it seems. The params are references to the html inputs
    this.links.push(new Link(title.value, link.value));
    title.value = '';
    link.value = '';
    return false; // Similar to e.preventDefault()
  }
}
