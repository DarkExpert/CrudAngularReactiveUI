import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthenticatorComponent } from './authenticator/authenticator.component';
import { OrderEditorComponent } from './order-editor/order-editor.component';
import { OrdersComponent } from './orders/orders.component';
import { OrderCreatorComponent } from './order-creator/order-creator.component';

@NgModule({
  declarations: [
    AppComponent,
    AuthenticatorComponent,
    OrderEditorComponent,
    OrdersComponent,
    OrderCreatorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
