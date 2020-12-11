import { ProductsFilterPipe } from './products-filter.pipe';

const products = [
  {
    '_id': '5fd24dc9b4a65086c59ee888',
    'title': 'Product 111',
    'img': 'assets/img/product-4.jpg',
    'price': 2345,
    'author': 'Igor',
    'isFavorite': false
  },
  {
    '_id': '5fd24dc9b4a65086c59ee889',
    'title': 'Product 1',
    'img': 'assets/img/product-1.jpg',
    'price': 200,
    'author': 'Igor',
    'isFavorite': true
  },
  {
    '_id': '5fd24dc9b4a65086c59ee88a',
    'title': 'Product 231',
    'img': 'assets/img/product-5.jpg',
    'price': 23,
    'author': 'Vlad',
    'isFavorite': true
  },
  {
    '_id': '5fd24dc9b4a65086c59ee88b',
    'title': 'Product 41',
    'img': 'assets/img/product-6.jpg',
    'price': 2344,
    'author': 'Lena',
    'isFavorite': false
  },
  {
    '_id': '5fd24dc9b4a65086c59ee88c',
    'title': 'Product 11',
    'img': 'assets/img/product-8.jpg',
    'price': 22,
    'author': 'Igor',
    'isFavorite': false
  },
  {
    '_id': '5fd24dc9b4a65086c59ee88d',
    'title': 'Product 31',
    'img': 'assets/img/product-7.jpg',
    'price': 334,
    'author': 'Lena',
    'isFavorite': false
  },
  {
    '_id': '5fd24dc9b4a65086c59ee88e',
    'title': 'Product 122',
    'img': 'assets/img/product-9.jpg',
    'price': 1200,
    'author': 'Max',
    'isFavorite': true
  },
  {
    '_id': '5fd24dc9b4a65086c59ee88f',
    'title': 'Product 2345',
    'img': 'assets/img/product-2.jpg',
    'price': 221,
    'author': 'Vlad',
    'isFavorite': false
  },
  {
    '_id': '5fd24dc9b4a65086c59ee890',
    'title': 'Product 234',
    'img': 'assets/img/product-3.jpg',
    'price': 333,
    'author': 'Igor',
    'isFavorite': true
  }
];
describe('Products pipe', () => {

  let productsFilterPipe: ProductsFilterPipe;

  beforeEach(() => {
    productsFilterPipe = new ProductsFilterPipe();
  });


  it('should work', () => {
    expect(productsFilterPipe.transform(products, ''))
      .toEqual(products);
    expect(productsFilterPipe.transform(products, '111'))
      .toEqual([products[0]]);
    expect(productsFilterPipe.transform(products, '', true).length)
      .toEqual(4);
  });
});
