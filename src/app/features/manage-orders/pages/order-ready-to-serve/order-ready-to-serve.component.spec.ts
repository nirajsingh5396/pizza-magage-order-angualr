import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderReadyToServeComponent } from './order-ready-to-serve.component';

describe('OrderReadyToServeComponent', () => {
  let component: OrderReadyToServeComponent;
  let fixture: ComponentFixture<OrderReadyToServeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrderReadyToServeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderReadyToServeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
