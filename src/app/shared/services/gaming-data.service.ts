import { Injectable } from '@angular/core';
import { friends, games, gamesPerHour, recentlyPlayed, yourGames } from './data';

@Injectable({
  providedIn: 'root'
})
export class GamingDataService {

  constructor() { }

  get friends(): Array<any> {
    return friends;
  }

  get games(): Array<any> {
    return games;
  }

  get gamesPerHour(): Array<any> {
    return gamesPerHour;
  }

  get recentlyPlayed(): Array<String> {
    return recentlyPlayed;
  }

  get yourGames(): Array<String> {
    return yourGames;
  }
}
