import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PlotComponent } from './plot/plot/plot.component';
import { AddPlotComponent } from './plot/add-plot/add-plot.component';
import { PlotDetailComponent } from './plot/plot-detail/plot-detail.component';
import { SettingsComponent } from './settings/settings.component';
import { TransactionComponent } from './transaction/transaction.component';
import { VehicleComponent } from './vehicle/vehicle.component';
import { BillingComponent } from './billing/billing.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ReportsComponent } from './reports/reports.component';
import { HomeComponent } from './home/home.component';
import { RyotComponent } from './ryot/ryot/ryot.component';
import { AddRyotComponent } from './ryot/add-ryot/add-ryot.component';
import { RyotDetailsComponent } from './ryot/ryot-details/ryot-details.component';

const routes: Routes = [
  { 
    path: 'plots', 
    component: PlotComponent 
  },
  { 
    path: 'plot/add', 
    component: AddPlotComponent 
  },
  { 
    path: 'plots/:id', 
    component: PlotDetailComponent 
  },
  { 
    path: '', 
    redirectTo: 'ryot/add', 
    pathMatch: 'full'
  }, 
  { 
    path: 'ryots', 
    component: RyotComponent 
  },
  { 
    path: 'ryot/add', 
    component: AddRyotComponent 
  },
  { 
    path: 'ryots/:id', 
    component: RyotDetailsComponent 
  },
  { path: 'home', component: HomeComponent },
  { path: 'settings', component: SettingsComponent },
  { path: 'transaction', component: TransactionComponent },
  { path: 'vehicle', component: VehicleComponent },
  { path: 'billing', component: BillingComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'reports', component: ReportsComponent },
  
];

@NgModule({
 imports: [ RouterModule.forRoot(routes) ],
 exports: [ RouterModule ]
})

export class AppRoutingModule {}