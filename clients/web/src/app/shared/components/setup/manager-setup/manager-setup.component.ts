import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SetupService } from 'src/app/services/setup/setup.service';
import { SelfService } from 'src/app/services/self/self.service';

@Component({
  selector: 'app-manager-setup',
  templateUrl: './manager-setup.component.html',
  styleUrls: ['./manager-setup.component.scss']
})
export class ManagerSetupComponent implements OnInit {

  step: number = Steps.Review;
  Steps = Steps;

  constructor(private router: Router, private setupService: SetupService,
    private selfService: SelfService) { }

  ngOnInit() {
  }

  completeSetup(): void {
    this.step++;

    this.setupService.setupManager({})
      .then(async () => {
        await this.selfService.getSelf();
        this.router.navigate(['']);
      })
      .catch((err) => {
        console.log(err)
      })
  }
}

enum Steps {
  Review,
  Submitting
}