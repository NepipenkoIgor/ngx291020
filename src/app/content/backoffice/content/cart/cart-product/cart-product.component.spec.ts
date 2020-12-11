import { CartProductComponent } from './cart-product.component';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatIconModule } from '@angular/material/icon';
import { By } from '@angular/platform-browser';

const product = {
  '_id': '5fd24dc9b4a65086c59ee888',
  'title': 'Product 111',
  'img': 'assets/img/product-4.jpg',
  'price': 2345,
  'author': 'Igor',
  'isFavorite': false,
  count: 2
};

describe('Cart product component', () => {
  let component: CartProductComponent;
  let fixture: ComponentFixture<CartProductComponent>;


  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CartProductComponent],
      imports: [MatIconModule]
    });
    fixture = TestBed.createComponent(CartProductComponent);
    component = fixture.componentInstance;
    component.product = product;
    fixture.detectChanges();

    spyOn(component.remove, 'emit')
      .and
      .callThrough();

    spyOn(component.increment, 'emit')
      .and
      .callThrough();


    spyOn(component.decrement, 'emit')
      .and
      .callThrough();


    spyOn(component, 'removeProduct')
      .and
      .callThrough();

    spyOn(component, 'incrementProduct')
      .and
      .callThrough();

    spyOn(component, 'decrementProduct')
      .and
      .callThrough();


  });

  it('should decrement ', () => {
    const el = fixture.debugElement.query(By.css('.decrement'));
    el.triggerEventHandler('click', null);
    expect(component.increment.emit).not.toHaveBeenCalled();
    expect(component.incrementProduct).not.toHaveBeenCalled();
    expect(component.remove.emit).not.toHaveBeenCalled();
    expect(component.removeProduct).not.toHaveBeenCalled();
    expect(component.decrementProduct).toHaveBeenCalledTimes(1);
    expect(component.decrement.emit).toHaveBeenCalledTimes(1);
  });

  it('should decrement and remove ', () => {
    component.product = {...product, count: 1};
    const el = fixture.debugElement.query(By.css('.decrement'));
    el.triggerEventHandler('click', null);
    expect(component.increment.emit).not.toHaveBeenCalled();
    expect(component.incrementProduct).not.toHaveBeenCalled();
    expect(component.remove.emit).toHaveBeenCalled();
    expect(component.removeProduct).not.toHaveBeenCalled();
    expect(component.decrementProduct).toHaveBeenCalledTimes(1);
    expect(component.decrement.emit).not.toHaveBeenCalledTimes(1);
  });
});
