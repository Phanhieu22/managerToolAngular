import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { LoginComponent } from './pages/login/login.component';
import { PrintInfoComponent } from './pages/print-info/print-info.component';
import { PrintCountComponent } from './pages/print-count/print-count.component';
import { PrintErrorComponent } from './pages/print-error/print-error.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'dashboard',
        component: DashboardComponent,
      },
      {
        path: 'printAnalysis/print-info',
        component: PrintInfoComponent,
      },
      {
        path: 'printAnalysis/print-count',
        component: PrintCountComponent,
      },
      {
        path: 'printAnalysis/print-error',
        component: PrintErrorComponent,
      },
    ],
  },

  {
    path: 'login',
    component: LoginComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
