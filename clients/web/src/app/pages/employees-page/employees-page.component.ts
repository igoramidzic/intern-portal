import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/core/models/employee/employee';
import { UserService } from 'src/app/services/user/user.service';
import { ActivatedRoute } from '@angular/router';
import { UserType } from 'src/app/core/models/user/user.model';

@Component({
  selector: 'app-employees-page',
  templateUrl: './employees-page.component.html',
  styleUrls: ['./employees-page.component.scss']
})
export class EmployeesPageComponent implements OnInit {

  employees: Employee[];

  constructor(private userService: UserService) { }

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
