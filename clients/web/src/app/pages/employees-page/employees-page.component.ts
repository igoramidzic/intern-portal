import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/core/models/employee/employee';
import { UserService } from 'src/app/services/user/user.service';
import { ActivatedRoute } from '@angular/router';
import { UserType } from 'src/app/core/models/user/user.model';
import { SelfService } from 'src/app/services/self/self.service';

@Component({
  selector: 'app-employees-page',
  templateUrl: './employees-page.component.html',
  styleUrls: ['./employees-page.component.scss']
})
export class EmployeesPageComponent implements OnInit {

  employees: Employee[];
  UserType = UserType;

  constructor(private userService: UserService, public selfService: SelfService) { }

  ngOnInit() {
    this.getEmployees();
  }

  getEmployees(): void {
    this.userService.getUsers([UserType.Admin, UserType.Manager])
      .then((employees: Employee[]) => this.employees = employees)
      .catch((err) => {
        console.log(err)
      })
  }
}
