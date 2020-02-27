import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionDesVentesComponent } from './gestion-des-ventes.component';

describe('GestionDesVentesComponent', () => {
  let component: GestionDesVentesComponent;
  let fixture: ComponentFixture<GestionDesVentesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GestionDesVentesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GestionDesVentesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
