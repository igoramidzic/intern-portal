import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-main-success-alert',
  templateUrl: './main-success-alert.component.html',
  styleUrls: ['./main-success-alert.component.scss']
})
export class MainSuccessAlertComponent implements OnInit {

  @Input() successes: string[];

  constructor() { }

  ngOnInit() {
  }

}
