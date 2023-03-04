import { Component } from '@angular/core';
import { Nguye482 } from './myClasses/nguye482';
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
  title = 'nguye482A4';

  bio: Nguye482={sid: 1, sname: "", 
  scampus: "", slogin: "", stitle:"Json data sync"}
  breakfast: BreakfastMenu[] = breakfastData.BreakfastMenu;
  lunch: LunchMenu[] = lunchData.LunchMenu;
  dinner: DinnerMenu[] = dinnerData.DinnerMenu;
}
