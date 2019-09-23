import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CorretagemPage } from './corretagem.page';

describe('CorretagemPage', () => {
  let component: CorretagemPage;
  let fixture: ComponentFixture<CorretagemPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CorretagemPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CorretagemPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
