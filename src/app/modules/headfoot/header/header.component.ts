import { Component, Input, OnInit } from '@angular/core';
import { UserInfo } from 'src/app/myClasses/info';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Input() hinfo!: UserInfo;
  constructor() { }

  ngOnInit(): void {
  }

}
