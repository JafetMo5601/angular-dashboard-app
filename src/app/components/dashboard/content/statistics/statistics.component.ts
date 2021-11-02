import { Component } from '@angular/core';

import { GamingDataService } from 'src/app/shared/services/gaming-data.service';


@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.css']
})
export class StatisticsComponent {
  mostPlayed = this.gamingData.gamesPerHour;
  
  constructor(
    private gamingData: GamingDataService
  ) { }
}
