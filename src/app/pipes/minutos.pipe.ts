import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'minutos',
  standalone: true
})
export class minutosPipe implements PipeTransform {

  transform(value: number): string {
    const minutos = Math.floor(value / 60);
    const segundos = value % 60;
    return `${minutos}m ${segundos}s`;
  }
}