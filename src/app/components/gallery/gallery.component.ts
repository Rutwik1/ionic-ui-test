import { Component, OnInit } from '@angular/core';
import { GalleryItem } from 'src/app/dataTypes/gallery.type';
import { GalleryService } from 'src/app/services/gallery/gallery.service';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss'],
})
export class GalleryComponent implements OnInit {

  galleryItems: GalleryItem[] = [];

  constructor(
    private galleryService: GalleryService
  ) { }

  ngOnInit() {
    this.galleryItems = this.galleryService.getGalleryItems()

  }

}
