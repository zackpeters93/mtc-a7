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
import { FacilitiesComponent } from './admin/companies/facilities/facilities.component';
import { AssetsComponent } from './admin/companies/facilities/assets/assets.component';
import { QuotesComponent } from './admin/jobs/quotes/quotes.component';
import { WorkOrdersComponent } from './admin/jobs/work-orders/work-orders.component';
import { TicketsComponent } from './admin/jobs/work-orders/tickets/tickets.component';

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
    TicketsComponent
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
