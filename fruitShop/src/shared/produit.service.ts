import { Injectable } from '@angular/core';
import { mock } from './mock';
import { IProduit } from './entities';


@Injectable({
  providedIn: 'root'
})
export class ProduitService {
  
// recuperer le data
  items: IProduit[] = mock;
  constructor() { }

  // // ajouter au panier
  addToCart(product: any) {
    this.items.push({ ...product, quantite: 1 });
   
  }

  // recuperer le panier
  getItems() {
    return this.items;
  }
    // supprimer du panier
 delete(item: any) {
   this.items = this.items.filter((i) => i.id !== item.id);
  }
  // incrementer la quantite
  incrementQuantity(quantite:number, id:number) {
    let item = this.items.find((i) => i.id === id);
    if (item) { item.quantite++; } 
    
  }
  // decrementer la quantite
   decrementQuantity(quantite:number, id:number) {
    let item = this.items.find((i) => i.id === id);
     if (item) {
       item.quantite--;
       if (item.quantite === 0) { this.delete(item); }
      } 
    
  }
  // recuperer le total hor taxe
  getTotal() {
    return this.items.reduce((acc, item) => {  return acc + item.prixHT * item.quantite}, 0);
     
  }
//
  getTotalTTC() {
    return (this.getTotal() * 1.2);  
  }
  
}
