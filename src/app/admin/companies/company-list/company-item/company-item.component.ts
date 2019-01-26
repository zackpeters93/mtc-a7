import { Component, OnInit, Input, Output } from '@angular/core';
import { Company } from '../../../../models/company.model';

@Component({
  selector: 'app-company-item',
  templateUrl: './company-item.component.html',
  styleUrls: ['./company-item.component.css']
})
export class CompanyItemComponent implements OnInit {
  @Input() company: Company;

  constructor() { }

  ngOnInit() {
  }

}
