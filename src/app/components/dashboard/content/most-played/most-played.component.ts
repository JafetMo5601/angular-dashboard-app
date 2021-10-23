import { Component, OnInit, ViewChild } from '@angular/core';
import { NgImageSliderComponent } from 'ng-image-slider';
import { imageObject } from './data';

@Component({
  selector: 'app-most-played',
  templateUrl: './most-played.component.html',
  styleUrls: ['./most-played.component.css']
})
export class MostPlayedComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  
  imageObject = imageObject;

  @ViewChild('nav') slider!: NgImageSliderComponent;
  
  prevImageClick() {
      this.slider.prev();
  }
  
  nextImageClick() {
      this.slider.next();
  }

}
