import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EntrarImobiPage } from './entrar-imobi.page';

describe('EntrarImobiPage', () => {
  let component: EntrarImobiPage;
  let fixture: ComponentFixture<EntrarImobiPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EntrarImobiPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EntrarImobiPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
