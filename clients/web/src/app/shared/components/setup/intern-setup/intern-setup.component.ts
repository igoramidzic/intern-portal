import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SelfService } from 'src/app/services/self/self.service';
import { SetupService } from 'src/app/services/setup/setup.service';

@Component({
  selector: 'app-intern-setup',
  templateUrl: './intern-setup.component.html',
  styleUrls: ['./intern-setup.component.scss']
})
export class InternSetupComponent implements OnInit {

  step: number = Steps.Review;
  Steps = Steps;

  constructor(private router: Router, private setupService: SetupService,
    private selfService: SelfService) { }

  ngOnInit() {
  }

  completeSetup(): void {
    this.step++;

    this.setupService.setupIntern({})
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