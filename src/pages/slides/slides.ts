import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-slides',
  templateUrl: 'slides.html'
})
export class BookText {
  selectedItem: any;
  slides: Array<{title: string, text: string}>;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    // If we navigated to this page, we will have an item available as a nav param
    this.selectedItem = navParams.get('slides');

    this.slides = [
        {
          title: 'Introduction',
          text: 'For Marie and Bert Hupp'
        },
        {
          title: 'The News',
          text: 'The news just came in from the County of Keck that a very small bug by the name of Van Vleck is yawing so wide you can look down his neck...'
        },
        {
          title: 'Yawn Spreading',
          text: 'A yawn is quite catching, you see. Like a cough.  It just takes one yawn to start the other yawns off...'
        },
        {
          title: 'Castle of Krupp',
          text: 'The new just came in from the Castle of Krupp that the lights are all out and the drawbridge is up. And the old drawbridge draw-er just said with a yawn...'
        },
        {
          title: 'Town of Mercedd',
          text: "Way out west in the town of Mercedd, The Hinkle-Horn Honking Club just went to bed. Every horn has been quietly hung on a hook..." 
        }
      ];
    }
  }