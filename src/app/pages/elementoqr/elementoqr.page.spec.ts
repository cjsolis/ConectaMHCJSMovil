import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ElementoqrPage } from './elementoqr.page';

describe('ElementoqrPage', () => {
  let component: ElementoqrPage;
  let fixture: ComponentFixture<ElementoqrPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ElementoqrPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ElementoqrPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
