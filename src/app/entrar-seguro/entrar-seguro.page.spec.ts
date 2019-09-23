import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EntrarSeguroPage } from './entrar-seguro.page';

describe('EntrarSeguroPage', () => {
  let component: EntrarSeguroPage;
  let fixture: ComponentFixture<EntrarSeguroPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EntrarSeguroPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EntrarSeguroPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
