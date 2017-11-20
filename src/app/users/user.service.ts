import { Injectable } from '@angular/core';
import { User } from './user';

@Injectable()
export class UserService {

  users: Array<User> = [
    { id: 1, name: "Brian", active: true, createdAt: new Date() },
    { id: 2, name: "Seth", active: true, createdAt: new Date() },
    { id: 3, name: "Ray", active: true, createdAt: new Date() },
    { id: 4, name: "Sam", active: true, createdAt: new Date() },
    { id: 5, name: "Olu", active: true, createdAt: new Date() },
  ];
  
  constructor() { }

}
