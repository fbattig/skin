import { Component, OnInit } from '@angular/core';
import { Brand } from '../shared/models/brand';
import { Product } from '../shared/models/product';
import { Type } from '../shared/models/type';
import { ShopService } from './shop.service';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss'],
})
export class ShopComponent implements OnInit {
  brands: Brand[] = [];
  types: Type[] = [];
  products: Product[] = [];
  brandIdSelected: number=0;
  typeIdSelected:number=0;
  sortSelected: string ='name';
  sortOptions = [
    {name: 'Alphabetical', value: 'name'},
    {name: 'Price: Low to high', value: 'priceAsc'},
    {name: 'Price: High to low', value: 'priceDesc'},
  ]

  constructor(private shopService: ShopService) {}

  ngOnInit(): void {
   this.getBrands();
   this.getTypes();
   this.getProducts();

  }

  getProducts() {
    this.shopService.getProducts(this.brandIdSelected, this.typeIdSelected, this.sortSelected).subscribe({
      next: (response) => (this.products = response.data),
      error: (error) => console.log(error),
    });
  }
  getBrands() {
    this.shopService.getBrands().subscribe({
      next: (response) => this.brands = [{id: 0, name: 'All'}, ...response],
      error: (error) => console.log(error),
    });
  }
  getTypes() {
    this.shopService.getTypes().subscribe({
      next: (response) => this.types = [{id: 0, name: 'All'}, ...response],
      error: (error) => console.log(error),
    });
  }
  onBrandSelected(brandId:number){
    this.brandIdSelected = brandId;
    this.getProducts();
  }

  onTypeSelected(typeId: number){
    this.typeIdSelected = typeId;
    this.getProducts();
  }
  onSortSelected(event: any) {
    this.sortSelected = event.target.value;
    this.getProducts();
  }


}
