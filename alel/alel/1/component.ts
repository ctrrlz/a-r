import { Component } from '@angular/core';
import { Product } from './product.model';
import { ProductsModule } from './magazin';

@Component({
  selector: 'app-product',
  template: `
    <div *ngFor="let product of products">
      <h2>{{ product.name }}</h2>
      <img *ngIf="product.imagePath" [src]="product.imagePath" alt="{{ product.name }} image">
      <p *ngIf="product.calories">Calories: {{ product.calories }}</p>
      <p *ngIf="product.protein">Protein: {{ product.protein }}</p>
      <p *ngIf="product.fat">Fat: {{ product.fat }}</p>
      <p *ngIf="product.carbohydrates">Carbohydrates: {{ product.carbohydrates }}</p>
      <p *ngIf="!product.calories && !product.protein && !product.fat && !product.carbohydrates">No nutritional information available.</p>
      <hr>
    </div>
  `,
})
export class ProductComponent {
  products: Product[];

  constructor(private productsModule: ProductsModule) {
    this.products = productsModule.products;
  }
}
