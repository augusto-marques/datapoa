import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaOnibusComponent } from './lista-onibus.component';

describe('ListaOnibusComponent', () => {
  let component: ListaOnibusComponent;
  let fixture: ComponentFixture<ListaOnibusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaOnibusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaOnibusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
