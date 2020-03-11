import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { FormGroup, FormControl } from "@angular/forms";
import { user } from "src/app/model/user.model";

@Injectable({
  providedIn: "root"
})
export class UtilisateurService {
  constructor(private http: HttpClient) {}
  private url = "http://localhost:3000/user";

  form: FormGroup = new FormGroup({
    id: new FormControl(null),
    profil: new FormControl(""),
    date_creation: new FormControl(""),
    email: new FormControl(null),
    date_fin: new FormControl(null),
    photo: new FormControl(null)
  });

  initializeFormGroup() {
    this.form.setValue({
      id: null,
      profil: "",
      date_creation: new Date(),
      date_fin: new Date(),
      photo: "",
      email: ""
    });
  }

  findAll() {
    return this.http.get<user[]>(this.url);
  }
  add(user) {
    return this.http.post<user>(this.url, user);
  }
  delete(id) {
    return this.http.delete(`${this.url}/${id}`);
  }
  update(user) {
    return this.http.put(`${this.url}/${user.id}`, user);
  }

  populateform(row) {
    this.form.setValue({
      id: row.id,
      profil: row.profil,
      date_creation: row.date_creation,
      date_fin: row.date_fin,
      email: row.email,
      photo: row.photo
    });
  }

  getAll() {
    return this.http.get<user>(this.url);
  }
}
