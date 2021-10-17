import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-friends',
  templateUrl: './friends.component.html',
  styleUrls: ['./friends.component.css']
})
export class FriendsComponent implements OnInit {
  friends: any[] = [
    {
      nickName: 'Juan Perez',
      status: 'Playing...'
    },
    {
      nickName: 'Juan Perez',
      status: 'Playing...'
    },
    {
      nickName: 'Juan Perez',
      status: 'Playing...'
    },
    {
      nickName: 'Juan Perez',
      status: 'Last time 5min ago'
    },
    {
      nickName: 'Juan Perez',
      status: 'Playing...'
    },
    {
      nickName: 'Juan Perez',
      status: 'Last time 4d ago'
    }
  ] 

  constructor() { }

  ngOnInit(): void {
  }

}
