import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-manager-setup-review-form',
  templateUrl: './manager-setup-review-form.component.html',
  styleUrls: ['./manager-setup-review-form.component.scss']
})
export class ManagerSetupReviewFormComponent implements OnInit {

  @Output() completeSetupEmitter: EventEmitter<boolean> = new EventEmitter();
  @Output() editEmitter: EventEmitter<number> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  completeSetup(): void {
    this.completeSetupEmitter.emit(true);
  }
}
