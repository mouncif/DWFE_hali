import { Component, OnInit } from "@angular/core";
import { fournisseur } from "src/app/model/fournisseur.model";
import { FournisseurService } from 'src/app/Services/services de vente/founisseur.service';
import { Router } from '@angular/router';

@Component({
  selector: "app-fournisseur",
  templateUrl: "./fournisseur.component.html",
  styleUrls: ["./fournisseur.component.css"]
})
export class FournisseurComponent implements OnInit {
  private fournis: fournisseur = {
    nom: "",
    nomcourt: "",
    ville: "",
    adresse: "",
    telfix: "",
    telmobile: "",
    fax: "",
    email: ""
  };

  public val: string = "Ajouter fournisseur";

  public changeLabelName() {
    this.val = "Ajouter fournisseur";
  }

  public changemodif() {
    this.val = "Modifier fournisseur";
  }

  alertStatus: any = {
    enabled: false,
    class: "success",
    message: ""
  };

  image: string = "";
  fournisseurs: fournisseur[] = [];
  constructor(private service: FournisseurService, private router: Router) {}
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
      this.fournisseurs = res as fournisseur[];
    });
  }


  add() {
    this.service.add(this.fournis).subscribe(fournis => {
      this.fournisseurs = [fournis, ...this.fournisseurs];
      this.service.form.reset();
    });
  }

  onEdit(row) {
    console.log(row);
    this.service.populateform(row);
  }

  onSubmit() {
    if (this.service.form.valid) {
      this.fournis = this.service.form.value;
      if (this.service.form.value.id == null) {
        this.add();
        this.alertStatus = {
          enabled: true,
          class: "alert-success",
          message: "fournisseur ajoute !!!! "
        };
        this.service.initializeFormGroup();
      } else {
        this.update();
        this.alertStatus = {
          enabled: true,
          class: "alert-success",
          message: "fournisseurs updated !!!! "
        };
        this.service.form.reset();
      }
    }
  }

  update() {
    this.service.update(this.fournis).subscribe(() => console.log("added"));
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
