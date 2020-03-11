import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import{FormGroup,FormControl,Validators}from"@angular/forms";
import { produit } from 'src/app/model/produit.model';
@Injectable({
  providedIn: 'root'
})
export class ProduitService {

    constructor(private http:HttpClient) {}
    private url = "http://localhost:3000/produit"
    
  form:FormGroup = new FormGroup({
    id: new FormControl(null),
    nom: new FormControl(''),
    nomcourt: new FormControl(''),
    prixbase: new FormControl(null),
    prixvente: new FormControl(null),
    seuilremise: new FormControl(null),
    unite: new FormControl(null),
    image: new FormControl(null),
    qteinitstock: new FormControl(null),
    qteactuelstock: new FormControl(null),
  });

  initializeFormGroup(){
    this.form.setValue({
      id:null,
      nom:'',
      nomcourt:'',
      prixbase:null,
      prixvente:null,
      seuilremise:null,
      unite:'',
      image:'',
      qteinitstock:null,
      qteactuelstock:null,
    });
  }
  
  findAll(){
    return this.http.get<produit[]>(this.url);
  }
  add(user){
    return this.http.post<produit>(this.url, user);
  }
  delete(id){
    return this.http.delete(`${this.url}/${id}`);
  }
  update(produit){
    return this.http.put(`${this.url}/${produit.id}`, produit);
  }

  populateform(row){
    this.form.setValue({
      id:row.id,
      nom:row.nom,
      nomcourt:row.nomcourt,
      prixbase:row.prixbase,
      prixvente:row.prixvente,
      seuilremise:row.seuilremise,
      unite:row.unite,
      image:null,
      qteinitstock:row.qteinitstock,
      qteactuelstock:row.qteactuelstock,
    });
  }

  getAll() {
    return this.http.get<produit>(this.url);
  }

}