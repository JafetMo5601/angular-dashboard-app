import { Component, OnInit } from '@angular/core';

import { GamingDataService } from 'src/app/shared/services/gaming-data.service';


@Component({
  selector: 'app-friends',
  templateUrl: './friends.component.html',
  styleUrls: ['./friends.component.css']
})
export class FriendsComponent implements OnInit {
  friends: Array<any> = this.gamingData.friends;

  constructor(
    private gamingData: GamingDataService
  ) { }

  ngOnInit(): void {
  }

}
