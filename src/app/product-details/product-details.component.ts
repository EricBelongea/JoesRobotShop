import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IProduct } from '../catalog/product.model';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent {
  @Input() product!: IProduct; // @Input() *an angular package* allows the child 'product-details' to accept an input
  @Output() buy = new EventEmitter()

  getImageUrl(product: IProduct) {
    return '/assets/images/robot-parts/' + product.imageName;
  }

  buyButtonClicked(product: IProduct){
    this.buy.emit();
  }

  getDiscountedClasses(product: IProduct) {
    return { strikethrough: product.discount > 0 };
  }
}
