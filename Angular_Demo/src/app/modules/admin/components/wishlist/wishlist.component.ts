import { Component, OnInit } from '@angular/core';
import {WISH} from './wish_set';
import {wish} from './wish';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.css']
})
export class WishlistComponent implements OnInit {
  
  wished: wish[]=WISH;
  constructor() { }

  ngOnInit(): void {
  }

}
