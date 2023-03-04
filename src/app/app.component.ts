import { Component } from '@angular/core';
import { UserInfo } from './myClasses/info';
import {DinnerMenu, BreakfastMenu, LunchMenu} from './cpInterface';
import breakfastData from '../assets/data/breakfast.json';
import lunchData from '../assets/data/lunch.json';
import dinnerData from '../assets/data/dinner.json';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Menu';

  bio: UserInfo={sid: 1, sname: "info here", 
  scampus: "", slogin: "", stitle:"info here "}
  breakfast: BreakfastMenu[] = breakfastData.BreakfastMenu;
  lunch: LunchMenu[] = lunchData.LunchMenu;
  dinner: DinnerMenu[] = dinnerData.DinnerMenu;
}
