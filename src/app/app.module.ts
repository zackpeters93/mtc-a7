import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { AngularFontAwesomeModule } from 'angular-font-awesome';

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
    CompanyItemComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    AngularFontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
