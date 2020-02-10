import { Component, OnInit } from '@angular/core';
import { SelfService } from 'src/app/services/self/self.service';

@Component({
  selector: 'app-main-navbar',
  templateUrl: './main-navbar.component.html',
  styleUrls: ['./main-navbar.component.scss']
})
export class MainNavbarComponent implements OnInit {

  constructor(public selfService: SelfService) { }

  ngOnInit() {
  }

}
