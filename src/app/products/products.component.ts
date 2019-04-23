import { Product } from './../models/product-model';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from './../services/product.service';
import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../services/category.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  products: Product[] = [];
  filteredProducts: Product[] = [];
  categories: any[] = [];
  category: any;

  constructor(
    private productService: ProductService,
    private categoryService: CategoryService,
    private activatedRoute: ActivatedRoute) {
    this.productService.getAll().subscribe(products => this.filteredProducts = this.products = products);
    this.categoryService.getCategories().subscribe(categories => this.categories = categories);
    this.activatedRoute.queryParamMap.subscribe(params => {
      this.category = params.get('category');
      this.filteredProducts = this.category ? this.products.filter(p => p.category === this.category) : this.products;
    });
  }
}
