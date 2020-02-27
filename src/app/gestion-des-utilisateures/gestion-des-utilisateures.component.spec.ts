import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionDesUtilisateuresComponent } from './gestion-des-utilisateures.component';

describe('GestionDesUtilisateuresComponent', () => {
  let component: GestionDesUtilisateuresComponent;
  let fixture: ComponentFixture<GestionDesUtilisateuresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GestionDesUtilisateuresComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GestionDesUtilisateuresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
