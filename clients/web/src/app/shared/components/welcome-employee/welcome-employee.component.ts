import { Component, OnInit } from '@angular/core';
import { SelfService } from 'src/app/services/self/self.service';
import { UserType } from 'src/app/core/models/user/user.model';

@Component({
  selector: 'app-welcome-employee',
  templateUrl: './welcome-employee.component.html',
  styleUrls: ['./welcome-employee.component.scss']
})
export class WelcomeEmployeeComponent implements OnInit {

  UserType = UserType;

  constructor(public selfService: SelfService) { }

  ngOnInit() {
  }

}
