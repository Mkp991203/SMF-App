import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './Credentials/login/login.component';
import { RegisterComponent } from './Credentials/register/register.component';
import { HomepageComponent } from './Home/homepage/homepage.component';
import { DashboardComponent } from './Dashboard/components/dashboard/dashboard.component';
import { AuthGuard } from './Credentials/guards/auth.guard';

const routes: Routes = [
  // {path:'', component:LoginComponent},
  {path:'', redirectTo:'homepage', pathMatch:'full'},
  {path:'login', component:LoginComponent},
  {path:'register', component:RegisterComponent},
  {path:'homepage', component:HomepageComponent},
  {path:'dashboard', component:DashboardComponent, canActivate:[AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
