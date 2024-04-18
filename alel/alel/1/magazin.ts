import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { Product } from './interface';

@NgModule({
  declarations: [],
  imports: [BrowserModule, FormsModule],
})
export class ProductsModule {
  products: Product[] = [
    { name: 'Hamburger', calories: 250, protein: 10, fats: 15, uglevod: 20, imagePath: 'png/hamburger.png' },
    { name: 'French Fries', calories: 200, fats: 10, uglevod: 30, imagePath: 'png/french-fries.png' },
    { name: 'Coca-Cola', calories: 150, uglevod: 40, imagePath: 'png/coca-cola.png' },
    { name: 'Salad', imagePath: 'png/salad.png' },
    { name: 'Ice Cream', calories: 300, fats: 15, uglevod: 35, imagePath: 'png/ice-cream.png' },
  ];
}