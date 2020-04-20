import { Component, OnInit } from '@angular/core';
import { SelfService } from 'src/app/services/self/self.service';

@Component({
  selector: 'app-active-account-indicator',
  templateUrl: './active-account-indicator.component.html',
  styleUrls: ['./active-account-indicator.component.scss']
})
export class ActiveAccountIndicatorComponent implements OnInit {

  constructor(public selfService: SelfService) { }

  ngOnInit() {
  }

}
