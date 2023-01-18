import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';
import { ContactResolver } from './services/contact.resolver';
import { ContactDetailsPageComponent } from './views/contact-details-page/contact-details-page.component';
import { ContactEditComponent } from './views/contact-edit/contact-edit.component';
import { ContactPageComponent } from './views/contact-page/contact-page.component';
import { HomePageComponent } from './views/home-page/home-page.component';
import { SignupPageComponent } from './views/signup-page/signup-page.component';
import { StatisticPageComponent } from './views/statistic-page/statistic-page.component';

const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'signup', component: SignupPageComponent },
  { path: 'statistic', component: StatisticPageComponent },
  {
    path: 'contact', canActivate: [AuthGuard], component: ContactPageComponent, children: [
      { path: 'edit/:id', component: ContactEditComponent, resolve: { contact: ContactResolver } },
      { path: 'edit', component: ContactEditComponent }
    ]
  },
  {
    path: 'contact/:id', canActivate: [AuthGuard],
    component: ContactDetailsPageComponent, resolve: { contact: ContactResolver },
    children: [
      { path: 'edit', component: ContactEditComponent, resolve: { contact: ContactResolver } }
    ]
  },

]

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true, paramsInheritanceStrategy: 'always' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
