import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  getUsers() {
    return [
      {
        "username": "Misterious User",
        "email": "friezkona@protonmail.com",
        "badges": [
            { "name": "new user", "color": "blue" },
            { "name": "friendly", "color": "yellow" },
            { "name": "VAC ban", "color": "red" }
        ]
      }
    ];
  }
  
}
