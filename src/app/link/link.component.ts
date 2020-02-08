import { Component, OnInit, Input } from '@angular/core';
import { Link } from './link.model';

@Component({
  selector: 'app-link',
  templateUrl: './link.component.html',
  styleUrls: ['./link.component.css']
})
export class LinkComponent implements OnInit {

  // With this Input decorator, we indicate the component that will receive data from App component html
  @Input() link: Link;

  constructor() {}
   

  ngOnInit() {
    
  }

}
