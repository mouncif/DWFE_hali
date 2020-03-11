import { Component, OnInit } from "@angular/core";
import { produit } from "src/app/model/produit.model";
import { ProduitService } from "src/app/Services/services de vente/produit.service";
import { Router } from "@angular/router";
@Component({
  selector: "app-produit",
  templateUrl: "./produit.component.html",
  styleUrls: ["./produit.component.css"]
})
export class ProduitComponent implements OnInit {
  private produit: produit = {
    nom: "",
    nomcourt: "",
    prixbase: null,
    prixvente: null,
    seuilremise: null,
    unite: "",
    image: "",
    qteinitstock: null,
    qteactuelstock: null
  };


  public val: string = "Ajouter Produit";

  public changeLabelName() {
    this.val = "Ajouter Produit";
  }

  public changemodif(){
    this.val = "Modifier Produit";
  }



  alertStatus: any = {
    enabled: false,
    class: "success",
    message: ""
  };

  image: string = "";
  produits: produit[] = [];
  constructor(private service: ProduitService, private router: Router) {}
  onClear() {
    this.service.initializeFormGroup();
    this.service.form.reset();
  }

  ngOnInit() {
    this.fetchElements();
  }

  fetchElements() {
    this.service.findAll().subscribe(res => {
      if (!res) {
        return;
      }
      console.log(res);
      this.produits = res as produit[];
    });
  }
  add() {
    this.service.add(this.produit).subscribe(produit => {
      this.produits = [produit, ...this.produits];
      this.service.form.reset();
    });
  }

  onEdit(row) {
    console.log(row);
    this.service.populateform(row);
  }

  onSubmit() {
    if (this.service.form.valid) {
      this.produit = this.service.form.value;
      if (this.service.form.value.id == null) {
        this.add();
        this.alertStatus = {
          enabled: true,
          class: "alert-success",
          message: "produit ajoute !!!! "
        };
        this.service.initializeFormGroup();
      } else {
        this.update();
        this.alertStatus = {
          enabled: true,
          class: "alert-success",
          message: "produit updated !!!! "
        };
        this.service.form.reset();
      }
    }
  }

  update() {
    this.service.update(this.produit).subscribe(() => console.log("added"));
  }
  closeAlert() {
    this.alertStatus = {
      enabled: false,
      class: "alert-success",
      message: ""
    };
  }
  onInputFile(event: Event) {
    this.image = (<HTMLInputElement>event.target).value;
  }
  onDelete(id) {
    if (confirm("est ce que vous etes sure de supprimer")) {
      this.delete(id);
    }
  }

  delete(id) {
    this.service.delete(id).subscribe(() => {
      this.fetchElements();
    });
  }

  onAdd() {
    this.service.initializeFormGroup();
  }
}
