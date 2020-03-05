import { Component, OnInit } from '@angular/core';
import { Intern } from 'src/app/core/models/intern/intern';
import { UserService } from 'src/app/services/user/user.service';
import { UserType } from 'src/app/core/models/user/user.model';
import { SelfService } from 'src/app/services/self/self.service';

@Component({
  selector: 'app-interns-page',
  templateUrl: './interns-page.component.html'
})
export class InternsPageComponent implements OnInit {

  interns: Intern[];
  UserType = UserType;

  constructor(private userService: UserService, public selfService: SelfService) { }

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
