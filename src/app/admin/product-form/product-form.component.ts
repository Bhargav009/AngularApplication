import { ProductService } from "./../../services/product.service";
import { CategoryService } from "./../../services/category.service";
import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import "rxjs/add/operator/take";

@Component({
  selector: "app-product-form",
  templateUrl: "./product-form.component.html",
  styleUrls: ["./product-form.component.css"]
})
export class ProductFormComponent {
  categories$;
  product = {};
  id;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private category: CategoryService,
    private productService: ProductService
  ) {
    this.categories$ = category.getCategories();
    this.id = this.activatedRoute.snapshot.paramMap.get("id");
    if (this.id)
      this.productService
        .getById(this.id)
        .take(1)
        .subscribe(product => (this.product = product));
  }

  save(product) {
    console.log(product);
    console.log(this.product);
    if (this.id) {
      this.productService.update(product, this.id);
    } else {
      this.productService.create(product);
    }
    this.router.navigate(["/admin/products"]);
  }
}
