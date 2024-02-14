import { Injectable } from '@angular/core';
import { GalleryItem } from '../../dataTypes/gallery.type';

@Injectable({
  providedIn: 'root'
})
export class GalleryService {


  constructor() { }


  GalleryItems: GalleryItem[] = [
    { image: '/assets/1.jpg' },
    { image: '/assets/2.jpg' },
    { image: '/assets/3.jpg' },
    { image: '/assets/4.jpg' },
    { image: '/assets/5.jpg' },
    { image: '/assets/6.jpg' },

  ];

  getGalleryItems(): GalleryItem[] {
    return this.GalleryItems;
  }

}
