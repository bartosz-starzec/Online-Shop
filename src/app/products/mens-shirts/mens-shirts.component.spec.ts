import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MensShirtsComponent } from './mens-shirts.component';

describe('MensShirtsComponent', () => {
  let component: MensShirtsComponent;
  let fixture: ComponentFixture<MensShirtsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MensShirtsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MensShirtsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
