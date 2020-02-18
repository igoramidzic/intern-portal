import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Company } from 'src/app/core/models/company/company.model';

@Component({
  selector: 'app-company-setup-form',
  templateUrl: './company-setup-form.component.html',
  styleUrls: ['./company-setup-form.component.scss']
})
export class CompanySetupFormComponent implements OnInit {

  @Input() company: Company;
  @Output() companyEmitter: EventEmitter<Company> = new EventEmitter();
  errors: string[];

  companyForm: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.companyForm = this.fb.group({
      companyName: new FormControl(this.company ? this.company.name : '', [Validators.required]),
    })
  }

  onComplete(): void {
    if (this.companyForm.invalid) {
      this.companyForm.markAllAsTouched();
      return;
    };

    this.errors = [];

    let company: Company = {
      name: this.companyForm.value.companyName
    }

    this.companyEmitter.emit(company);
  }

}
