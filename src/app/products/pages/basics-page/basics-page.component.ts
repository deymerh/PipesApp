import { Component } from '@angular/core';

@Component({
  selector: 'app-basics-page',
  templateUrl: './basics-page.component.html',
  styles: [
  ]
})
export class BasicsPageComponent {
  public fullName = 'deYMer HERnanDez!';

  public customDate: Date = new Date();
}
