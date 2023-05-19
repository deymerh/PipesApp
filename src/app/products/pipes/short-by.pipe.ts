import { Pipe, PipeTransform } from "@angular/core";
import { Hero } from "../interfaces/hero.interface";

@Pipe({
  name: 'sortBy'
})
export class ShortByPipe implements PipeTransform {
  transform(heros: Hero[], shortBy?: keyof Hero | ''): Hero[]{
    switch (shortBy) {
      case 'name':
        return heros.sort((a, b) => (a.name > b.name) ? 1 : -1);
        case 'canFly':
          return heros.sort((a, b) => (a.canFly > b.canFly) ? 1 : -1);
        case 'color':
          return heros.sort((a, b) => (a.color > b.color) ? 1 : -1);
      default:
        return heros;
    }
  }
}
