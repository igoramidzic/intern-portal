import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user/user.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from 'src/app/core/models/employee/employee';

@Component({
  selector: 'app-employees-content-page',
  templateUrl: './employees-content-page.component.html',
  styleUrls: ['./employees-content-page.component.scss']
})
export class EmployeesContentPageComponent implements OnInit {

  userId: string;

  constructor(private userService: UserService, private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.userId = params.userId;
    })
  }

  get employees(): Employee[] {
    return this.userService.users;
  }

  get selectedEmployee(): Employee {
    if (this.employees)
      return this.employees.find(i => i._id == this.userId);
  }

  userUpdated(employee: Employee): void {
    let index: number = this.employees.findIndex(i => i._id == employee._id);
    this.employees[index] = employee;
  }

  deletedUser(employee: Employee): void {
    this.router.navigate(['/employees']);
  }

}
