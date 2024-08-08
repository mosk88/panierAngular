import { Injectable } from '@angular/core';
import { mock } from './mock';
import { IProduit } from './entities';


@Injectable({
  providedIn: 'root'
})
export class ProduitService {
  
// recuperer le data
  items: IProduit[] = [];

  constructor() { }

  // // ajouter au panier
  addItem(product: IProduit) {
   
   const existingItem = this.items.find(item => item.id === product.id);

    if (existingItem) {
      existingItem.quantite++;
    } else {
      this.items.push(product);
    }
  }

  // recuperer le panier
  getItems() {
    return this.items;
  }
    // supprimer du panier
 delete(item: IProduit) {
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
       if (item.quantite > 0){
         item.quantite--;}
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
