import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: 'canFly'
})
export class CanFlyPipe implements PipeTransform {

  transform(value: boolean): 'Is flies' | "It doest't fly" {
    return value ? 'Is flies' : "It doest't fly"
  }

}
