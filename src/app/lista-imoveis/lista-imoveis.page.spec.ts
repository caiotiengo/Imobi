import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaImoveisPage } from './lista-imoveis.page';

describe('ListaImoveisPage', () => {
  let component: ListaImoveisPage;
  let fixture: ComponentFixture<ListaImoveisPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaImoveisPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaImoveisPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
