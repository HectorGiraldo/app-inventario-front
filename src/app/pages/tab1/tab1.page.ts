import { Component } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  prestada = false;

  constructor() {

  }

  change(event){
    const value: string = event.detail.value;
    console.log(value);
    if( value === 'prestada'){
      this.prestada = true;
    } else {
      this.prestada = false;
    }
  }



}
