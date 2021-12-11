import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';

@Component({
  selector: 'app-rating-star',
  templateUrl: './rating-star.component.html',
  styleUrls: ['./rating-star.component.css']
})
export class RatingStarComponent implements OnInit {

  @Input() itemName: string;
  @Output() ratestatusEvent = new EventEmitter<any>();

  starList: boolean[] = [true, true, true, true];
  rating: number;

  constructor() { }

  ngOnInit() {
  }

  setStar(data: any) {
    this.rating = data + 1;
    for (var i = 0; i <= 3; i++) {
      if (i <= data) {
        this.starList[i] = false;
      }
      else {
        this.starList[i] = true;
      }
    }
    const rateStatuse = { itemName: this.itemName, rating: this.rating };
    this.ratestatusEvent.emit(rateStatuse);
  }
}
