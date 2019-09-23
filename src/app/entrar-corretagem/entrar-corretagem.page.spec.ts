import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EntrarCorretagemPage } from './entrar-corretagem.page';

describe('EntrarCorretagemPage', () => {
  let component: EntrarCorretagemPage;
  let fixture: ComponentFixture<EntrarCorretagemPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EntrarCorretagemPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EntrarCorretagemPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
