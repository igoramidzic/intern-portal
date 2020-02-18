import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SetupService } from 'src/app/services/setup/setup.service';
import { Company } from 'src/app/core/models/company/company.model';
import { SelfService } from 'src/app/services/self/self.service';

@Component({
  selector: 'app-admin-setup',
  templateUrl: './admin-setup.component.html',
  styleUrls: ['./admin-setup.component.scss']
})
export class AdminSetupComponent implements OnInit {

  company: Company;
  step: number = Steps.Company;
  Steps = Steps;

  constructor(private router: Router, private setupService: SetupService,
    private selfService: SelfService) { }

  ngOnInit() {
  }

  onCompanyEmit(company: Company): void {
    this.company = company;
    this.step++;
  }

  completeSetup(): void {
    this.step++;

    this.setupService.setupAdmin({ company: this.company })
      .then(async (result: { company: Company }) => {
        await this.selfService.getSelf();
        this.router.navigate(['']);
      })
      .catch((err) => {
        console.log(err)
      })
  }
}

enum Steps {
  Company,
  Review,
  Submitting
}