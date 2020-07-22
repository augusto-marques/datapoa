import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItinerarioOnibusComponent } from './itinerario-onibus.component';

describe('ItinerarioOnibusComponent', () => {
  let component: ItinerarioOnibusComponent;
  let fixture: ComponentFixture<ItinerarioOnibusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItinerarioOnibusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItinerarioOnibusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
