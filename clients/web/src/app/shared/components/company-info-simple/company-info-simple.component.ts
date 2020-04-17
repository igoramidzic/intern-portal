import { Component, OnInit } from '@angular/core';
import { CompanyService } from 'src/app/services/company/company.service';

@Component({
  selector: 'app-company-info-simple',
  templateUrl: './company-info-simple.component.html',
  styleUrls: ['./company-info-simple.component.scss']
})
export class CompanyInfoSimpleComponent implements OnInit {

  constructor(public companyService: CompanyService) { }

  ngOnInit() {
  }

}
