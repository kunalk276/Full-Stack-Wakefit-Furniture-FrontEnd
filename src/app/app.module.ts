import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { UpdateProductComponent } from './update-product/update-product.component';
import { CreateProductComponent } from './create-product/create-product.component';
import { CreateFeedbackComponent } from './create-feedback/create-feedback.component';
import { FeedbackListComponent } from './feedback-list/feedback-list.component';
import { FeedbackService } from './feedback.service';
import { UpdateFeedbackComponent } from './update-feedback/update-feedback.component';
import { FeedbackDetailsComponent } from './feedback-details/feedback-details.component';
import { CreateAddressComponent } from './create-address/create-address.component';
import { UpdateAddressComponent } from './update-address/update-address.component';
import { AddressDetailsComponent } from './address-details/address-details.component';
import { AddressListComponent } from './address-list/address-list.component';
import { CreateUserComponent } from './create-user/create-user.component';
import { UpdateUserComponent } from './update-user/update-user.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { UserListComponent } from './user-list/user-list.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    ProductDetailsComponent,
    UpdateProductComponent,
    CreateProductComponent,
    CreateFeedbackComponent,
    FeedbackListComponent,
    UpdateFeedbackComponent,
    FeedbackDetailsComponent,
    CreateAddressComponent,
    UpdateAddressComponent,
    AddressDetailsComponent,
    AddressListComponent,
    CreateUserComponent,
    UpdateUserComponent,
    UserDetailsComponent,
    UserListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
    
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
