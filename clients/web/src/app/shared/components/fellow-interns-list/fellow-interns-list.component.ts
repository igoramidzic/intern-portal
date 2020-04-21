import { Component, OnInit, Input } from '@angular/core';
import { UserType } from 'src/app/core/models/user/user.model';
import { Intern } from 'src/app/core/models/intern/intern';

@Component({
  selector: 'app-fellow-interns-list',
  templateUrl: './fellow-interns-list.component.html',
  styleUrls: ['./fellow-interns-list.component.scss']
})
export class FellowInternsListComponent implements OnInit {

  @Input() interns: Intern[];
  UserType = UserType;

  constructor() { }

  ngOnInit() {
  }
}
