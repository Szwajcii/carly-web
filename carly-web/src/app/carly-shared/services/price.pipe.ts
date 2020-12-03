import {Pipe, PipeTransform} from '@angular/core';

@Pipe({name: 'PricePipe'})
export class PricePipe implements PipeTransform {
  transform(price: number): string {
    const priceStr = price.toString();
    const reversedCharArray = priceStr.split('').reverse();
    let formattedPrice = '';
    let loopCounter = 1;

    if (priceStr.length > 3) {
      reversedCharArray.forEach((char) => {
        formattedPrice = char + formattedPrice;
        if (loopCounter % 3 === 0) {
          formattedPrice = ',' + formattedPrice;
        }
        loopCounter++;
      });
    } else {
      formattedPrice = priceStr;
    }

    return '$ ' + formattedPrice;
  }
}
