import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthenticatorComponent } from './authenticator/authenticator.component';
import { OrderCreatorComponent } from './order-creator/order-creator.component';
import { OrderEditorComponent } from './order-editor/order-editor.component';
import { OrdersComponent } from './orders/orders.component';

const routes: Routes = [
   { path: '', component: AuthenticatorComponent},
   { path: 'home', component: OrdersComponent},
   { path: 'createorder', component: OrderCreatorComponent},
   { path: 'editeorder', component: OrderEditorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
