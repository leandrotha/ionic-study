import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor() {}

  text = 'Not yet Welcomed';
  reasonText: string;
  amountText: string;

  onClickButton() {
    this.text = 'Welcome, World!';
  }

  onClickAdd() {
    console.log('Add clicked');
  }

  onClickClear() {

  }

}
