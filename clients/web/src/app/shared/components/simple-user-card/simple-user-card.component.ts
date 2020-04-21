import { Component, OnInit, Input } from '@angular/core';
import { IUser } from 'src/app/core/models/user/user.model';

@Component({
  selector: 'app-simple-user-card',
  templateUrl: './simple-user-card.component.html'
})
export class SimpleUserCardComponent implements OnInit {

  @Input() user: IUser;

  constructor() { }

  ngOnInit() {
  }

}
