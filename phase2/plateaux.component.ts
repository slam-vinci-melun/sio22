import { Component, OnInit } from '@angular/core';
import { CrudService } from "../../services/crud.service";
import { LigneCommande } from '../../classes/ligne-commande';

@Component({
  selector: 'app-plateaux',
  templateUrl: './plateaux.component.html',
  styleUrls: ['./plateaux.component.css']
})

export class PlateauxComponent implements OnInit {

  title = 'sushifast';
  Boxes: any = [];

  boxe: any = {
    id: 0,
    nom: '',
    pieces: 0,
    composition: [],
    saveurs: [],
    prix: 0.0,
    image: ''
  };
 
  commande: LigneCommande[];
  totalCommande: number = 0.0;

  showModal: boolean = false;

  constructor(public crudService: CrudService) {
    this.commande = [];

  }

  ngOnInit() {
    this.fetchBoxes()
  }

  fetchBoxes() {
    return this.crudService.getBoxes().subscribe((data: {}) => {
      this.Boxes = data;
    })
  }

  plus(index: number) {
    // Exemple d'affectation
    let uneLigne = new LigneCommande(1, this.Boxes[index].nom, 3);
    this.commande.push(uneLigne);
    console.log("Plus :" + index + this.Boxes[index].nom);

  }

  moins(index: number) {
    console.log("Moins :" + index);
  }

  affModal(i: number) {
    if (this.showModal) {
      this.showModal = false;
    } else {
      console.log("Modal indice :" + i);    
      console.log("Modal nom plateau :" + this.Boxes[i].nom);
      this.boxe = this.Boxes[i];
      this.showModal = true;
    }
  }
}
