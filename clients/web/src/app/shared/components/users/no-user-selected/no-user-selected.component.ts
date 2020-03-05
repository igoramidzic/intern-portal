import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-no-user-selected',
  templateUrl: './no-user-selected.component.html',
  styleUrls: ['./no-user-selected.component.scss']
})
export class NoUserSelectedComponent implements OnInit {

  @Input() title;

  constructor() { }

  ngOnInit() {
  }

}
