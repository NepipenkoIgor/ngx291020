import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { inject, TestBed } from '@angular/core/testing';
import { HTTP_INTERCEPTORS, HttpClient } from '@angular/common/http';
import { AuthInterceptor } from './auth.interceptor';
import { BASE_URL } from './config';
import { environment } from '../../../environments/environment';
import { ProductsService } from '../../content/backoffice/content/products/products.service';

const mockedProducts = [
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

const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImluZXBpcGVua28iLCJpYXQiOjE2MDA3MDg1MzJ9.Uch-jamBl7U9XF_m1riA9APROi_lO-mkDmnjjuv8Kv8';
localStorage.setItem('accessToken', token);

describe('Auth Interceptor', () => {
  let httpMocked: HttpTestingController;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        {
          provide: HTTP_INTERCEPTORS,
          useClass: AuthInterceptor,
          multi: true
        },
        {
          provide: BASE_URL,
          useValue: environment.baseUrl,
          //   multi: true
        },
        ProductsService
      ]
    });

    httpMocked = TestBed.inject(HttpTestingController);
  });


  it('should have auth token',
    inject([HttpClient, BASE_URL],
      (http: HttpClient, baseUrl: string) => {

        http.get('/auth')
          .subscribe();


        const httpObj = httpMocked.expectOne({
          method: 'GET',
          url: `${baseUrl}/auth`
        });

        expect(httpObj.request.headers.has('Authorization')).toBeTruthy();
        expect(httpObj.request.headers.get('Authorization')).toEqual(`Bearer ${token}`);

      }));

  it('should transform', inject([ProductsService, BASE_URL],
    (productsService: ProductsService, baseUrl: string) => {
      productsService.getProducts()
        .subscribe((products) => {
          expect(products).toEqual(mockedProducts);
        });


      const httpObj = httpMocked.expectOne({
        method: 'GET',
        url: `${baseUrl}/products`
      });

      httpObj.flush({data: mockedProducts});

    }));
});
