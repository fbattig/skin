import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { ProductDetailsComponent } from './product-details/product-details.component';



@NgModule({
  declarations: [
    HomeComponent,
    ProductDetailsComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [HomeComponent]
})
export class HomeModule { }
