import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { IUser } from 'src/app/core/models/user/user.model';

@Component({
  selector: 'app-user-content',
  templateUrl: './user-content.component.html',
  styleUrls: ['./user-content.component.scss']
})
export class UserContentComponent implements OnInit {

  @Input() user: IUser;
  @Output() userUpdatedEmitter: EventEmitter<IUser> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  userUpdated(user: IUser): void {
    this.userUpdatedEmitter.emit(user);
  }
}
