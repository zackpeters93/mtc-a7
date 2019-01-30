import { Component, OnInit } from '@angular/core';
import { Company } from '../../models/company.model';
import { CompanyService } from '../../services/company.service';

@Component({
  selector: 'app-companies',
  templateUrl: './companies.component.html',
  styleUrls: ['./companies.component.css'],
  providers: [CompanyService]
})
export class CompaniesComponent implements OnInit {
  addNewCompany = false;
  onClick(plus: boolean){
    this.addNewCompany = true;
  }

  selectedCompany: Company;

  constructor(private companyService: CompanyService) {

  }

  ngOnInit() {
    this.companyService.companySelected
    .subscribe(
      (company: Company) => {
        this.selectedCompany = company;
      }
    );
  }

}
