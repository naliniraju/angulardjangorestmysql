import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { Routes, RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AddRyotComponent } from './ryot/add-ryot/add-ryot.component';
import { RyotComponent } from './ryot/ryot/ryot.component';
import { RyotDetailsComponent } from './ryot/ryot-details/ryot-details.component';
import { PlotComponent } from './plot/plot/plot.component';
import { AddPlotComponent } from './plot/add-plot/add-plot.component';
import { PlotDetailComponent } from './plot/plot-detail/plot-detail.component';
import { AppRoutingModule } from './app-routing.module';
import { BillingComponent } from './billing/billing.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { ReportsComponent } from './reports/reports.component';
import { SettingsComponent } from './settings/settings.component';
import { TransactionComponent } from './transaction/transaction.component';
import { VehicleComponent } from './vehicle/vehicle.component';

@NgModule({
  declarations: [
    AppComponent,
    AddRyotComponent,
    RyotComponent,
    RyotDetailsComponent,
    PlotComponent,
    AddPlotComponent,
    PlotDetailComponent,
    BillingComponent,
    DashboardComponent,
    HomeComponent,
    ReportsComponent,
    SettingsComponent,
    TransactionComponent,
    VehicleComponent,
  
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule
 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
