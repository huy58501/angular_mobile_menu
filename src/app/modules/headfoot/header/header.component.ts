import { Component, Input, OnInit } from '@angular/core';
import { Nguye482 } from 'src/app/myClasses/nguye482';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Input() hinfo!: Nguye482;
  constructor() { }

  ngOnInit(): void {
  }

}
