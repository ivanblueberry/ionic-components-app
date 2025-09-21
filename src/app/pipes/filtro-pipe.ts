import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtro',
  standalone: true  // Añadir esto para componentes standalone
})
export class FiltroPipe implements PipeTransform {

  /**
   * @param array Array de cualquier tipo
   * @param texto Texto a buscar o filtrar
   * @param column Propiedad del objeto a filtrar
   */
  transform(array: any[],
            texto: string = '',
            column: string = 'title'): any[] {

    if (texto === '' || texto === 'todos') {
      return array;
    }

    if (!array) {
      return array;
    }

    texto = texto.toLowerCase();

    return array.filter(
      item => String(item[column]).toLowerCase().includes(texto)
    );
  }
}
