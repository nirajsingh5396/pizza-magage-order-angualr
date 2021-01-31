import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderRedayToServeComponent } from './order-reday-to-serve.component';

describe('OrderRedayToServeComponent', () => {
  let component: OrderRedayToServeComponent;
  let fixture: ComponentFixture<OrderRedayToServeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrderRedayToServeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderRedayToServeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
