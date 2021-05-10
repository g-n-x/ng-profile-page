import { Component, OnInit } from '@angular/core';
import { IUser } from '../user.interface';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile-list',
  templateUrl: './profile-list.component.html',
  styleUrls: ['./profile-list.component.css']
})
export class ProfileListComponent implements OnInit {

  users: IUser[];

  constructor(private _userService: UserService, private router: Router) { }

  ngOnInit(): void {
    this._userService.getUsers()
    .subscribe(data => this.users = data);
  }

  onSelect(user: IUser) {
    this.router.navigate(['/profile', user.id]);
  }

}
