import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { UpdateProductComponent } from './update-product/update-product.component';
import { CreateProductComponent } from './create-product/create-product.component';
import { UpdateFeedbackComponent } from './update-feedback/update-feedback.component';
import { FeedbackDetailsComponent } from './feedback-details/feedback-details.component';
import { FeedbackListComponent } from './feedback-list/feedback-list.component';
import { CreateFeedbackComponent } from './create-feedback/create-feedback.component';
import { AddressListComponent } from './address-list/address-list.component';
import { AddressDetailsComponent } from './address-details/address-details.component';
import { CreateAddressComponent } from './create-address/create-address.component';
import { UpdateAddressComponent } from './update-address/update-address.component';
import { UpdateUserComponent } from './update-user/update-user.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { CreateUserComponent } from './create-user/create-user.component';
import { UserListComponent } from './user-list/user-list.component';

const routes: Routes = [
  { path: '', redirectTo: 'product', pathMatch: 'full' },
  { path: 'product', component: ProductListComponent },
  { path: 'create-product', component: CreateProductComponent },
  { path: 'update-product/:productId', component: UpdateProductComponent },
  { path: 'product-details/:productId', component: ProductDetailsComponent },
  
  { path: 'feedbacks', component: FeedbackListComponent },
  { path: 'feedback-details/:feedbackId', component: FeedbackDetailsComponent },
  { path: 'create-feedback', component: CreateFeedbackComponent },
  { path: 'update-feedback/:feedbackId', component: UpdateFeedbackComponent },
  
  
  { path: 'addresses', component: AddressListComponent },
  { path: 'address-details/:addressId', component: AddressDetailsComponent },
  { path: 'create-address', component: CreateAddressComponent },
  { path: 'update-address/:addressId', component: UpdateAddressComponent },


  { path: 'users', component: UserListComponent },
  { path: 'create-user', component: CreateUserComponent },
  { path: 'user-details/:userId', component: UserDetailsComponent },
  { path: 'update-user/:userId', component: UpdateUserComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
