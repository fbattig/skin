import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    HomeComponent,
    ProductDetailsComponent
  ],
  imports: [
    CommonModule, SharedModule
  ],
  exports: [HomeComponent]
})
export class HomeModule { }
