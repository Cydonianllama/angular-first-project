import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.sass']
})
export class ProfileComponent implements OnInit {

  // if the user is authenticate render the profile , if not render register
  isAuth: boolean = false

  constructor() { }

  ngOnInit(): void {
    this.isAuth = true
  }

}
