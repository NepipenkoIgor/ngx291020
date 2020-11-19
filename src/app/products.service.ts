import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

export interface IProduct {
  '_id': string;
  'title': string;
  'img': string;
  'price': number;
  'author': string;
  'isFavorite': boolean;
}

// @Injectable({
//   providedIn: 'root'
// })
export class ProductsService {

  public constructor(
    // @Inject(HttpClient) private http: HttpClient,
    private http: HttpClient,
  ) {
    console.log('Init service', http, Date.now());
  }

  public getProducts(): Observable<IProduct[]> {
    return this.http.get<IProduct[]>('/products');
  }
}
