import { Component, OnInit } from '@angular/core';
import {COMPLETED} from './complete_set';
import {completed} from './complete';

@Component({
  selector: 'app-completed',
  templateUrl: './completed.component.html',
  styleUrls: ['./completed.component.css']
})
export class CompletedComponent implements OnInit {

  completed: completed[]=COMPLETED;

  constructor() { }

  ngOnInit(): void {
  }

}
