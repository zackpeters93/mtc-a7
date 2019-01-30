import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AdminComponent } from './admin/admin.component';
import { PublicComponent } from './public/public.component';
import { PeopleComponent } from './admin/people/people.component';
import { CompaniesComponent } from './admin/companies/companies.component';
import { JobsComponent } from './admin/jobs/jobs.component';
import { FacilitiesComponent } from './admin/companies/company-detail/facilities/facilities.component';
import { AssetsComponent } from './admin/companies/company-detail/facilities/assets/assets.component';
import { QuotesComponent } from './admin/jobs/quotes/quotes.component';
import { WorkOrdersComponent } from './admin/jobs/work-orders/work-orders.component';
import { TicketsComponent } from './admin/jobs/work-orders/tickets/tickets.component';
import { CompanyDetailComponent } from './admin/companies/company-detail/company-detail.component';
import { CompanyListComponent } from './admin/companies/company-list/company-list.component';
import { CompanyItemComponent } from './admin/companies/company-list/company-item/company-item.component';
import { FacilityDetailComponent } from './admin/companies/company-detail/facilities/facility-detail/facility-detail.component';
import { FacilityListComponent } from './admin/companies/company-detail/facilities/facility-list/facility-list.component';
import { FacilityItemComponent } from './admin/companies/company-detail/facilities/facility-list/facility-item/facility-item.component';
import { AssetsDetailComponent } from './admin/companies/company-detail/facilities/assets/assets-detail/assets-detail.component';
import { AssetsListComponent } from './admin/companies/company-detail/facilities/assets/assets-list/assets-list.component';
import { AssetsItemComponent } from './admin/companies/company-detail/facilities/assets/assets-list/assets-item/assets-item.component';
import { CompanyAddComponent } from './admin/companies/company-add/company-add.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    AdminComponent,
    PublicComponent,
    PeopleComponent,
    CompaniesComponent,
    JobsComponent,
    FacilitiesComponent,
    AssetsComponent,
    QuotesComponent,
    WorkOrdersComponent,
    TicketsComponent,
    CompanyDetailComponent,
    CompanyListComponent,
    CompanyItemComponent,
    FacilityDetailComponent,
    FacilityListComponent,
    FacilityItemComponent,
    AssetsDetailComponent,
    AssetsListComponent,
    AssetsItemComponent,
    CompanyAddComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    AngularFontAwesomeModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
