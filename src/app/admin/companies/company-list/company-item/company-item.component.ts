import { Component, OnInit, Input } from '@angular/core';
import { Company } from '../../../../models/company.model';
import { CompanyService } from '../../../../services/company.service';

@Component({
  selector: 'app-company-item',
  templateUrl: './company-item.component.html',
  styleUrls: ['./company-item.component.css']
})
export class CompanyItemComponent implements OnInit {
  @Input() company: Company;

  constructor(private companyService: CompanyService) { }

  ngOnInit() {
  }

  onSelected() {
    this.companyService.companySelected.emit(this.company);
  }

}
