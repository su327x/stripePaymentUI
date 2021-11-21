import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CancelComponent } from './cancel/cancel.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { SucessComponent } from './sucess/sucess.component';

const routes: Routes = [
  {
    path: 'checkout', component: CheckoutComponent, },
  { path: 'cancel', component: CancelComponent },
  { path: 'success/:id', component: SucessComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
