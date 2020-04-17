import { Component, OnInit, Input } from '@angular/core';
import { SelfService } from 'src/app/services/self/self.service';
import { UserType } from 'src/app/core/models/user/user.model';

@Component({
  selector: 'app-welcome-intern',
  templateUrl: './welcome-intern.component.html',
  styleUrls: ['./welcome-intern.component.scss']
})
export class WelcomeInternComponent implements OnInit {

  UserType = UserType;

  constructor(public selfService: SelfService) { }

  ngOnInit() {
  }
}
