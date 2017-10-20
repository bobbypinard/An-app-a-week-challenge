import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  ladder1: any;
  ladder2: any;
  ladder3: any;

  constructor(public navCtrl: NavController) {

    this.ladder1 = [
      'Lorem',
      'Ipsum',
      'Dolor',
      'Sit',
      'Amet',
      'Consectetur',
      'Adipiscing',
      'Elit',
      'Cras',
      'Eleifend'
    ];
    this.ladder2 = [
      'Lorem',
      'Ipsum',
      'Dolor',
      'Sit',
      'Amet',
      'Consectetur',
      'Adipiscing',
      'Elit',
      'Cras',
      'Eleifend'
    ];
    this.ladder3 = [
      'Lorem',
      'Ipsum',
      'Dolor',
      'Sit',
      'Amet',
      'Consectetur',
      'Adipiscing',
      'Elit',
      'Cras',
      'Eleifend'
    ];
  }

}
