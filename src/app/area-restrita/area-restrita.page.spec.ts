import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AreaRestritaPage } from './area-restrita.page';

describe('AreaRestritaPage', () => {
  let component: AreaRestritaPage;
  let fixture: ComponentFixture<AreaRestritaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AreaRestritaPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AreaRestritaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
