import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductViewCompleteComponent } from './product-view-complete.component';

describe('ProductViewCompleteComponent', () => {
  let component: ProductViewCompleteComponent;
  let fixture: ComponentFixture<ProductViewCompleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductViewCompleteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductViewCompleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
