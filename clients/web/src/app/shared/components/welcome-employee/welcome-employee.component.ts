import { Component, OnInit } from '@angular/core';
import { SelfService } from 'src/app/services/self/self.service';

@Component({
  selector: 'app-welcome-employee',
  templateUrl: './welcome-employee.component.html',
  styleUrls: ['./welcome-employee.component.scss']
})
export class WelcomeEmployeeComponent implements OnInit {

  constructor(public selfService: SelfService) { }

  ngOnInit() {
  }

}
