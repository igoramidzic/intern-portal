import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { User } from 'src/app/core/models/user/user.model';

@Component({
  selector: 'app-user-content',
  templateUrl: './user-content.component.html',
  styleUrls: ['./user-content.component.scss']
})
export class UserContentComponent implements OnInit {

  @Input() user: User;
  @Output() userUpdatedEmitter: EventEmitter<User> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  userUpdated(user: User): void {
    this.userUpdatedEmitter.emit(user);
  }
}
