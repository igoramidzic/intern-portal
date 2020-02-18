import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Company } from 'src/app/core/models/company/company.model';

@Component({
  selector: 'app-review-setup-form',
  templateUrl: './review-setup-form.component.html',
  styleUrls: ['./review-setup-form.component.scss']
})
export class ReviewSetupFormComponent implements OnInit {

  @Input() company: Company;
  @Output() completeSetupEmitter: EventEmitter<boolean> = new EventEmitter();
  @Output() editEmitter: EventEmitter<number> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  completeSetup(): void {
    this.completeSetupEmitter.emit(true);
  }
}
