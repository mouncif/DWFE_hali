import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionDesDroitsComponent } from './gestion-des-droits.component';

describe('GestionDesDroitsComponent', () => {
  let component: GestionDesDroitsComponent;
  let fixture: ComponentFixture<GestionDesDroitsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GestionDesDroitsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GestionDesDroitsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
