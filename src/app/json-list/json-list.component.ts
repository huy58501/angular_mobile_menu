import { Component, Input, OnInit } from '@angular/core';
import {BreakfastMenu, DinnerMenu, LunchMenu} from '../cpInterface';

@Component({
  selector: 'app-json-list',
  templateUrl: './json-list.component.html',
  styleUrls: ['./json-list.component.css']
})
export class JsonListComponent implements OnInit {

  @Input() breakfastList!: BreakfastMenu[];
  @Input() lunchList!: LunchMenu[];
  @Input() dinnerList!: DinnerMenu[];

  constructor() { }

  ngOnInit(): void {
  }

}
