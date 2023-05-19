import { Component } from '@angular/core';
import { Color, Hero } from '../../interfaces/hero.interface';

@Component({
  selector: 'producst-order',
  templateUrl: './order.component.html',
  styles: [
  ]
})
export class OrderComponent {
  public orderBy?: keyof Hero;
  public heros: Hero[] = [
    {
      name: 'Superman',
      canFly: true,
      color: Color.back
    },
    {
      name: 'Batman',
      canFly: false,
      color: Color.blue
    },
    {
      name: 'Daredevi',
      canFly: true,
      color: Color.red
    },
    {
      name: 'Robin',
      canFly: false,
      color: Color.green
    },
    {
      name: 'Linterna verde',
      canFly: true,
      color: Color.green
    },
  ];
  public isUppercase: boolean = false;

  toggleUppercase(): void {
    this.isUppercase = !this.isUppercase;
  }

  changeOrder(value: keyof Hero) {
    this.orderBy = value;
  }

}
