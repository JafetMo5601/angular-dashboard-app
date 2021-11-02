import { Component, OnInit, ViewChild } from '@angular/core';
import { NgImageSliderComponent } from 'ng-image-slider';

import { GamingDataService } from 'src/app/shared/services/gaming-data.service';


@Component({
  selector: 'app-most-played',
  templateUrl: './most-played.component.html',
  styleUrls: ['./most-played.component.css']
})
export class MostPlayedComponent {
  @ViewChild('nav') slider!: NgImageSliderComponent;
  imageObject = this.gamingData.games;

  constructor(
    private gamingData: GamingDataService
  ) { }
  
  prevImageClick() {
      this.slider.prev();
  }
  
  nextImageClick() {
      this.slider.next();
  }

}
