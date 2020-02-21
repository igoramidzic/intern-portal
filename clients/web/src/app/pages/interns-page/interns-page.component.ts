import { Component, OnInit } from '@angular/core';
import { Intern } from 'src/app/core/models/intern/intern';
import { UserService } from 'src/app/services/user/user.service';
import { UserType } from 'src/app/core/models/user/user.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-interns-page',
  templateUrl: './interns-page.component.html',
  styleUrls: ['./interns-page.component.scss']
})
export class InternsPageComponent implements OnInit {

  userId: string;
  interns: Intern[];

  constructor(private userService: UserService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.getInterns();

    this.route.params.subscribe((params) => {
      this.userId = params.userId;
    })
  }

  getInterns(): void {
    this.userService.getUsers([UserType.Intern])
      .then((interns: Intern[]) => this.interns = interns)
      .catch((err) => {
        console.log(err)
      })
  }

  get selectedIntern(): Intern {
    if (this.interns)
      return this.interns.find(i => i._id == this.userId);
  }

  updatedUser(intern: Intern): void {
    let index: number = this.interns.findIndex(i => i._id == intern._id);
    this.interns[index] = intern;
  }
}
