import { Component, OnInit } from '@angular/core';
import { Intern } from 'src/app/core/models/intern/intern';
import { UserService } from 'src/app/services/user/user.service';
import { ActivatedRoute } from '@angular/router';
import { UserType } from 'src/app/core/models/user/user.model';

@Component({
  selector: 'app-interns-content-page',
  templateUrl: './interns-content-page.component.html',
  styleUrls: ['./interns-content-page.component.scss']
})
export class InternsContentPageComponent implements OnInit {

  userId: string;

  constructor(private userService: UserService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.userId = params.userId;
    })
  }

  get interns(): Intern[] {
    return this.userService.users;
  }

  get selectedIntern(): Intern {
    if (this.interns)
      return this.interns.find(i => i._id == this.userId);
  }

  userUpdated(intern: Intern): void {
    let index: number = this.interns.findIndex(i => i._id == intern._id);
    this.interns[index] = intern;
  }
}
