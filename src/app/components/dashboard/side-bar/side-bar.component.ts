import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent implements OnInit {

  placeholder = 'Search...'
  recentlyPlayed = [
    'League of Leyends',
    'Hitman 3',
    'GTA V',
    'Far Cry 6',
    'FIFA 22',
    'Rocket League',
    'Minecraft',
  ]
  yourGames = [
    'League of Leyends',
    'Hitman 3',
    'GTA V',
    'Far Cry 6',
    'FIFA 22',
    'Rocket League',
    'Minecraft',
    'Cyberpunk 2077',
    'Left4Dead',
    'Brawhalla'
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
