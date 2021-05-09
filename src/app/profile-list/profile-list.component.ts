import { Component, OnInit } from '@angular/core';
import { IUser } from '../user.interface';
import { UserService } from '../user.service';

@Component({
  selector: 'app-profile-list',
  templateUrl: './profile-list.component.html',
  styleUrls: ['./profile-list.component.css']
})
export class ProfileListComponent implements OnInit {

  users: IUser[];

  constructor(private _userService: UserService) { }

  ngOnInit(): void {
    this._userService.getUsers()
    .subscribe(data => this.users = data);
  }

}
