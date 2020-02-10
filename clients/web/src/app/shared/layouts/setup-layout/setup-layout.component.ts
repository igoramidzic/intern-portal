import { Component, OnInit } from '@angular/core';
import { SelfService } from 'src/app/services/self/self.service';
import { UserType } from 'src/app/core/models/user/user.model';

@Component({
  selector: 'app-setup-layout',
  templateUrl: './setup-layout.component.html',
  styleUrls: ['./setup-layout.component.scss']
})
export class SetupLayoutComponent implements OnInit {

  UserType = UserType;

  constructor(public selfService: SelfService) { }

  ngOnInit() {
  }

}
