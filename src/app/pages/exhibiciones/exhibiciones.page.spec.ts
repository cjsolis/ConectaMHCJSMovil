import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExhibicionesPage } from './exhibiciones.page';

describe('ExhibicionesPage', () => {
  let component: ExhibicionesPage;
  let fixture: ComponentFixture<ExhibicionesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExhibicionesPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExhibicionesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
