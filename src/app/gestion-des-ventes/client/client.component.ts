import { Component, OnInit } from '@angular/core';
import { client } from 'src/app/model/client.model';
import { ClientService } from 'src/app/Services/services de vente/client.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent implements OnInit {

  private clt: client = {
    nom: "",
    prenom: "",
    statut: "",
    photo: "",
    tel: "",
    email: "",
    adresse: "",
    ville: ""
  };

  public val: string = "Ajouter client";

  public changeLabelName() {
    this.val = "Ajouter client";
  }

  public changemodif() {
    this.val = "Modifier client";
  }

  alertStatus: any = {
    enabled: false,
    class: "success",
    message: ""
  };

  image: string = "";
  clients: client[] = [];
  constructor(private service: ClientService, private router: Router) {}
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
      this.clients = res as client[];
    });
  }


  add() {
    this.service.add(this.clt).subscribe(clt => {
      this.clients = [clt, ...this.clients];
      this.service.form.reset();
    });
  }

  onEdit(row: any) {
    console.log(row);
    this.service.populateform(row);
  }

  onSubmit() {
    if (this.service.form.valid) {
      this.clt = this.service.form.value;
      if (this.service.form.value.id == null) {
        this.add();
        this.alertStatus = {
          enabled: true,
          class: "alert-success",
          message: "client ajoute !!!! "
        };
        this.service.initializeFormGroup();
      } else {
        this.update();
        this.alertStatus = {
          enabled: true,
          class: "alert-success",
          message: "client updated !!!! "
        };
        this.service.form.reset();
      }
    }
  }

  update() {
    this.service.update(this.clt).subscribe(() => console.log("added"));
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
