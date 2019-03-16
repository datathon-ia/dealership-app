import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccidentCardComponent } from './accident-card.component';

describe('AccidentCardComponent', () => {
  let component: AccidentCardComponent;
  let fixture: ComponentFixture<AccidentCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccidentCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccidentCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
