import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderPreparingComponent } from './order-preparing.component';

describe('OrderPreparingComponent', () => {
  let component: OrderPreparingComponent;
  let fixture: ComponentFixture<OrderPreparingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrderPreparingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderPreparingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
