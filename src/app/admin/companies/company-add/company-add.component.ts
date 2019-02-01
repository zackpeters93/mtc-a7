import { Component, OnInit, Input, ElementRef, ViewChild, EventEmitter, Output } from '@angular/core';
import { Company } from '../../../models/company.model';


@Component({
  selector: 'app-company-add',
  templateUrl: './company-add.component.html',
  styleUrls: ['./company-add.component.css']
})
export class CompanyAddComponent implements OnInit {
  @Input() company:Company;
  @ViewChild('companyNameInput') companyNameRef: ElementRef;
  @Output() companyAdded = new EventEmitter<Company>();

  constructor() { }

  ngOnInit() {
  }

  onAddCompany() {
    const cName = this.companyNameRef.nativeElement.value;
    const newCompanyName = new Company(cName);
    this.companyAdded.emit(newCompanyName);
  }

}
