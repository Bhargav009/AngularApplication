import { AngularFireDatabase } from 'angularfire2/database';
import { Injectable } from '@angular/core';

@Injectable()
export class ProductService {

  constructor(private db: AngularFireDatabase) { }

  create(product) {
    return this.db.list("/products").push(product);
  }

  update(product, productId) {
    console.log("/products/"+ productId);
    return this.db.object("/products/"+ productId).update(product);
  }

  getAll() {
    return this.db.list("/products");
  }

  getById(productId) {
    return this.db.object("/products/" + productId);
  }

}
