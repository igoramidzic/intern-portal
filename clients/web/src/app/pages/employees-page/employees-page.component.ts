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

  userId: string;
  employees: Employee[];

  constructor(private userService: UserService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.getEmployees();

    this.route.params.subscribe((params) => {
      this.userId = params.userId;
    })
  }

  getEmployees(): void {
    this.userService.getUsers([UserType.Admin, UserType.Manager])
      .then((employees: Employee[]) => this.employees = employees)
      .catch((err) => {
        console.log(err)
      })
  }

  get selectedEmployee(): Employee {
    if (this.employees)
      return this.employees.find(i => i._id == this.userId);
  }

  updatedUser(employee: Employee): void {
    let index: number = this.employees.findIndex(i => i._id == employee._id);
    this.employees[index] = employee;
  }
}
