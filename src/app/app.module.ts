import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app-root/app.component';
import { HomePageComponent } from './views/home-page/home-page.component';
import { ContactPageComponent } from './views/contact-page/contact-page.component';
import { ContactDetailsPageComponent } from './views/contact-details-page/contact-details-page.component';
import { StatisticPageComponent } from './views/statistic-page/statistic-page.component';
import { ContactPreviewComponent } from './cmps/contact-preview/contact-preview.component';
import { ContactListComponent } from './cmps/contact-list/contact-list.component';
import { ContactFilterComponent } from './cmps/contact-filter/contact-filter.component';
import { ChartComponent } from './cmps/chart/chart.component';
import { NgChartsModule } from 'ng2-charts';
import { AppHeaderComponent } from './cmps/app-header/app-header.component';
import { ContactEditComponent } from './views/contact-edit/contact-edit.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SignupPageComponent } from './views/signup-page/signup-page.component';
import { MovesListComponent } from './cmps/moves-list/moves-list.component';
import { TransferFundComponent } from './cmps/transfer-fund/transfer-fund.component';
import { InitialsPipe } from './pipes/initials.pipe';


@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    ContactPageComponent,
    ContactDetailsPageComponent,
    StatisticPageComponent,
    ContactPreviewComponent,
    ContactListComponent,
    ContactFilterComponent,
    ChartComponent,
    AppHeaderComponent,
    ContactEditComponent,
    SignupPageComponent,
    MovesListComponent,
    TransferFundComponent,
    InitialsPipe,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgChartsModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
