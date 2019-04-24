import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RyotComponent } from './ryot.component';

describe('RyotComponent', () => {
  let component: RyotComponent;
  let fixture: ComponentFixture<RyotComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RyotComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RyotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
