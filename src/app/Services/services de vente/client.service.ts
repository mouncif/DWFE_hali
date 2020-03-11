import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { client } from 'src/app/model/client.model';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  constructor(private http:HttpClient) {}
  private url = "http://localhost:3000/client"
  
form:FormGroup = new FormGroup({
  id: new FormControl(null),
  nom: new FormControl(''),
  prenom: new FormControl(''),
  email: new FormControl(null),
  tel: new FormControl(null),
  ville: new FormControl(null),
  photo: new FormControl(null),
  adresse: new FormControl(null),
  status: new FormControl(null),
 
});

initializeFormGroup(){
  this.form.setValue({
    id:null,
    nom: "",
    prenom: "",
    statut: "",
    photo: "",
    tel: "",
    email: "",
    adresse: "",
    ville: "" 
  });
}

findAll(){
  return this.http.get<client[]>(this.url);
}
add(user){
  return this.http.post<client>(this.url, user);
}
delete(id){
  return this.http.delete(`${this.url}/${id}`);
}
update(client){
  return this.http.put(`${this.url}/${client.id}`, client);
}

populateform(row){
  this.form.setValue({
    id:row.id,
    nom:row.nom,
    prenom:row.prenom,
    tel:row.tel,
    email:row.email, 
    ville:row.ville,
    adresse:row.adresse,
    photo:row.photo,
    status:row.status
  });

}

getAll() {
  return this.http.get<client>(this.url);
}
}