import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImovelPage } from './imovel.page';

describe('ImovelPage', () => {
  let component: ImovelPage;
  let fixture: ComponentFixture<ImovelPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImovelPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImovelPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
