import { Component } from '@angular/core';

import { GamingDataService } from 'src/app/shared/services/gaming-data.service';


@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent {
  recentlyPlayed = this.gamingData.recentlyPlayed;
  yourGames = this.gamingData.yourGames;
  placeholder: string = 'Search...'

  constructor(
    private gamingData: GamingDataService
  ) { }
}
