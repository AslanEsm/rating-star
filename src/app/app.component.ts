import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // Rate
  instrumental1Rate: number;
  instrumental2Rate: number;


  getRate(event) {
    console.log('event :', event);
    if (event.itemName === "instrumental1") {
      this.instrumental1Rate = event.rating;
    } else if (event.itemName === "instrumental2") {
      this.instrumental2Rate = event.rating;
    }
    console.log('instrumental1Rate :', this.instrumental1Rate);
    console.log('instrumental2Rate :', this.instrumental2Rate);
  }
}
