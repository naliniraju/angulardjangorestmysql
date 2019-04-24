import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddRyotComponent } from './add-ryot.component';

describe('AddRyotComponent', () => {
  let component: AddRyotComponent;
  let fixture: ComponentFixture<AddRyotComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddRyotComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddRyotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
