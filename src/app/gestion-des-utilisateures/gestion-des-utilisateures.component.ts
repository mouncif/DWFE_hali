import { Component, OnInit } from '@angular/core';
import { user } from '../model/user.model';
import { UtilisateurService } from '../Services/service utilisateur/utilisateur.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-gestion-des-utilisateures',
  templateUrl: './gestion-des-utilisateures.component.html',
  styleUrls: ['./gestion-des-utilisateures.component.css']
})
export class GestionDesUtilisateuresComponent implements OnInit {
  private usr: user = {
    id: null,
    profil: "",
    date_creation: new Date(),
    date_fin: new Date(),
    photo: "",
    email: ""
  };

  public val: string = "Ajouter utilisateur";

  public changeLabelName() {
    this.val = "Ajouter utilisateur";
  }

  public changemodif() {
    this.val = "Modifier utilisateur";
  }

  alertStatus: any = {
    enabled: false,
    class: "success",
    message: ""
  };

  image: string = "";
  users: user[] = [];
  constructor(private service: UtilisateurService, private router: Router) {}
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
      this.users = res as user[];
    });
  }


  add() {
    this.service.add(this.usr).subscribe(usr => {
      this.users = [usr, ...this.users];
      this.service.form.reset();
    });
  }

  onEdit(row: any) {
    console.log(row);
    this.service.populateform(row);
  }

  onSubmit() {
    if (this.service.form.valid) {
      this.usr = this.service.form.value;
      if (this.service.form.value.id == null) {
        this.add();
        this.alertStatus = {
          enabled: true,
          class: "alert-success",
          message: "user ajoute !!!! "
        };
        this.service.initializeFormGroup();
      } else {
        this.update();
        this.alertStatus = {
          enabled: true,
          class: "alert-success",
          message: "user updated !!!! "
        };
        this.service.form.reset();
      }
    }
  }

  update() {
    this.service.update(this.usr).subscribe(() => console.log("added"));
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
