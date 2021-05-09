import { Component, Input, OnInit } from '@angular/core';
import { IUser } from '../user.interface';
import { UserService } from '../user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  @Input()
  user: IUser;
  
  constructor(private _userService: UserService) { }

  ngOnInit(): void {
    this.user 
  }

}
