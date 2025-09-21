import { Pipe, PipeTransform } from '@angular/core';
import { Album } from '../interfaces/interfaces';

@Pipe({
  name: 'filtro'
})
export class FiltroPipe implements PipeTransform {

  /**
   *
   * @param array albums of service
   * @param texto text to search or filter
   */
  transform(array: Album[],
            texto: string = '',
            column: keyof Album = 'title'): Album[] {

    if ( texto === '') {
      return array;
    }

    if ( !array ) {
      return array;
    }

    texto = texto.toLocaleLowerCase();

    return array.filter(
      item => String(item[column]).toLowerCase().includes( texto )
    );
  }

}
