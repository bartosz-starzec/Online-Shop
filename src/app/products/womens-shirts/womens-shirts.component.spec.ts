import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WomensShirtsComponent } from './womens-shirts.component';

describe('WomensShirtsComponent', () => {
  let component: WomensShirtsComponent;
  let fixture: ComponentFixture<WomensShirtsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WomensShirtsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WomensShirtsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
