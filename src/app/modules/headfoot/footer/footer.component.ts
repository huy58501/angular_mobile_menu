import { Component, OnInit,Input } from '@angular/core';
import { Nguye482 } from 'src/app/myClasses/nguye482';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  @Input() hinfo!: Nguye482;
  constructor() { }

  ngOnInit(): void {
  }

}
