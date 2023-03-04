import { Component, OnInit,Input } from '@angular/core';
import { UserInfo } from 'src/app/myClasses/info';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  @Input() hinfo!: UserInfo;
  constructor() { }

  ngOnInit(): void {
  }

}
