import { Component, inject } from '@angular/core';
import { ProductListComponent } from "../product-list/product-list.component";
import { ProduitService } from '../../shared/produit.service';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ProductListComponent,CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent  {
  cartService = inject(ProduitService);
  
addToCart(product: any) {
  this.cartService.addItem(product);
}

}
