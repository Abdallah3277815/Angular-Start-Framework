import { Component } from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css'],
})
export class GalleryComponent {
  items = [
    '../assets/images/port3.png',
    '../assets/images/port2.png',
    '../assets/images/poert1.png',
    '../assets/images/poert1.png',
    '../assets/images/port2.png',
    '../assets/images/port3.png'
  ];
  getImageSrc(event: MouseEvent) {
    
    console.log(event.target);
    
  }

}
