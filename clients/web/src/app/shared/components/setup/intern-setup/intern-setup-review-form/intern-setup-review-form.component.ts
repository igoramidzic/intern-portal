import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-intern-setup-review-form',
  templateUrl: './intern-setup-review-form.component.html',
  styleUrls: ['./intern-setup-review-form.component.scss']
})
export class InternSetupReviewFormComponent implements OnInit {

  @Output() completeSetupEmitter: EventEmitter<boolean> = new EventEmitter();
  @Output() editEmitter: EventEmitter<number> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  completeSetup(): void {
    this.completeSetupEmitter.emit(true);
  }
}
