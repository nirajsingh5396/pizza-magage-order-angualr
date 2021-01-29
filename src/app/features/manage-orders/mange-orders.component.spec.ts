import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MangeOrdersComponent } from './mange-orders.component';

describe('MangeOrdersComponent', () => {
  let component: MangeOrdersComponent;
  let fixture: ComponentFixture<MangeOrdersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MangeOrdersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MangeOrdersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
