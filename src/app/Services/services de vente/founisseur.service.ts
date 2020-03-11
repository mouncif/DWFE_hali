import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { fournisseur } from 'src/app/model/fournisseur.model';

@Injectable({
  providedIn: 'root'
})
export class FournisseurService {

  constructor(private http:HttpClient) {}
  private url = "http://localhost:3000/fournisseur"
  
form:FormGroup = new FormGroup({
  id: new FormControl(null),
  nom: new FormControl(''),
  nomcourt: new FormControl(''),
  telfix: new FormControl(null),
  telmobile: new FormControl(null),
  fax: new FormControl(null),
  ville: new FormControl(null),
  adresse: new FormControl(null),
  email: new FormControl(null),
 
});

initializeFormGroup(){
  this.form.setValue({
    id:null,
    nom:'',
    nomcourt:'',
    ville:'',
    adresse:'',
    telfix:'',
    telmobile:'',
    fax:'',
    email:'',
  
  });
}

findAll(){
  return this.http.get<fournisseur[]>(this.url);
}
add(user){
  return this.http.post<fournisseur>(this.url, user);
}
delete(id){
  return this.http.delete(`${this.url}/${id}`);
}
update(fournisseur){
  return this.http.put(`${this.url}/${fournisseur.id}`, fournisseur);
}

populateform(row){
  this.form.setValue({
    id:row.id,
    nom:row.nom,
    nomcourt:row.nomcourt,
    telfix:row.telfix,
    telmobile:row.telmobile,
    fax:row.fax,
    email:row.email, 
    ville:row.ville,
    adresse:row.adresse,
  });
}

getAll() {
  return this.http.get<fournisseur>(this.url);
}
}