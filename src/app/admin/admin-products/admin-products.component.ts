import { Product } from './../../models/product-model';
import { ProductService } from "./../../services/product.service";
import { Component, OnInit, OnDestroy } from "@angular/core";
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: "app-admin-products",
  templateUrl: "./admin-products.component.html",
  styleUrls: ["./admin-products.component.css"]
})
export class AdminProductsComponent implements OnDestroy {
  products: Product[];
  filteredProducts: Product[];
  subcription: Subscription;

  constructor(private productService: ProductService) {
    this.subcription = this.productService.getAll().subscribe(products => this.filteredProducts = this.products = products);
  }

  ngOnDestroy() {
    this.subcription.unsubscribe();
  }

  doFilter(query: string) {
    this.filteredProducts = (query) ? 
      this.products.filter(p => p.title.toLowerCase().includes(query.toLowerCase())) : this.products;
  }
}
