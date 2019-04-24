import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RyotDetailsComponent } from './ryot-details.component';

describe('RyotDetailsComponent', () => {
  let component: RyotDetailsComponent;
  let fixture: ComponentFixture<RyotDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RyotDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RyotDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
