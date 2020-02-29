import { Component, OnInit } from '@angular/core';
import { Intern } from 'src/app/core/models/intern/intern';
import { UserService } from 'src/app/services/user/user.service';
import { UserType } from 'src/app/core/models/user/user.model';

@Component({
  selector: 'app-interns-page',
  templateUrl: './interns-page.component.html',
  styleUrls: ['./interns-page.component.scss']
})
export class InternsPageComponent implements OnInit {

  interns: Intern[];

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.getInterns();
  }

  getInterns(): void {
    this.userService.getUsers([UserType.Intern])
      .then((interns: Intern[]) => this.interns = interns)
      .catch((err) => {
        console.log(err)
      })
  }
}
