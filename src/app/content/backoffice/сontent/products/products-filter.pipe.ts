import { Pipe, PipeTransform } from '@angular/core';
import { IProduct } from './products.service';

@Pipe({
  name: 'productsFilter',
  pure: false
})
export class ProductsFilterPipe implements PipeTransform {

  public transform(products: IProduct[], text: string, isFavorite: boolean): IProduct[] {
    let result: IProduct[] = products;
    if (isFavorite) {
      result = result.filter((product: IProduct) => product.isFavorite === isFavorite);
    }
    if (!text) {
      return result;
    }
    return result.filter((product: IProduct) => {
      return `${product.title} ${product.price}`.toLowerCase().includes(text.toLowerCase());
    });
  }

}
