import { Component, Input, OnInit } from '@angular/core';
import { IUser } from '../user.interface';
import { UserService } from '../user.service';
import {ActivatedRoute } from '@angular/router';
import { ConditionalExpr } from '@angular/compiler';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  @Input()
  user: IUser;

  public id: number;
  
  constructor(private _userService: UserService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = parseInt(this.route.snapshot.paramMap.get('id'));
    let users: IUser[] = null;

    this._userService.getUsers()
    .subscribe(data => {
      users = data;
      for(let i = 0; i < users.length; ++i) {
        if(users[i].id == this.id) {
          this.user = users[i];
          break;
        }
      }
    });
  }
}
