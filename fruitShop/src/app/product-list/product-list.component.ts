import { Component, EventEmitter, inject, OnInit, Output } from '@angular/core';
import { ProduitService } from '../../shared/produit.service';
import { IProduit } from '../../shared/entities';
import { CommonModule } from '@angular/common';
import { mock } from '../../shared/mock';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent  {
// injecter le service
  cartService = inject(ProduitService);
// recuperer les produits
  products: IProduit[] = [...mock];
    
  }


