import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { BookText } from '../slides/slides';

@Component({
  selector: 'page-chapters',
  templateUrl: 'chapters.html'
})
export class ChapterPage {
  selectedItem: any;
  heading: string[];
  chapters: Array<{title: string, heading: string}>;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    // If we navigated to this page, we will have an item available as a nav param
    this.selectedItem = navParams.get('chapters');

    // Let's populate this page with some filler content for funzies
    this.heading = ['Introduction', 'The News', 'Yawn Spreading', 'Castle of Krupp', 'Town of Mercedd'];

    this.chapters = [];
    for (let i = 0; i < 5; i++) {
      this.chapters.push({
        title: 'Chapter ' + i,
        heading: this.heading[i]
      });
    }
  }

  itemTapped(event, chapter) {
    // That's right, we're pushing to ourselves!
    this.navCtrl.push(BookText, {
      chapters: chapter
    });
  }
}
