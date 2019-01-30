import { EventEmitter } from '@angular/core';
import { Company } from '../models/company.model';

export class CompanyService {
  companySelected = new EventEmitter<Company>();

  private companies: Company[] = [
    new Company('Komatsu'),
    new Company('zackpeters.com')
  ];

  getCompanies() {
    return this.companies.slice();
  }
}
