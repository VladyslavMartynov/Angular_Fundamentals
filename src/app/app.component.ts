import { Component } from '@angular/core';
import { IUser } from "./UserList/UserList.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  userList: IUser [] = [
    {
      id: '1',
      name: 'Alex'
    },
    {
      id: '2',
      name: 'Bill'
    },
    {
      id: '3',
      name: 'Bob'
    }
  ]

  removeUser(Id: string): void {
    this.userList = this.userList.filter(({ id }) => id !== Id);
  }

  addUser(name: string): void {
    const uniqueId = Math.random().toString(6);
    const newUser: IUser = {
      id: uniqueId,
      name: name
    }
    this.userList.push(newUser);
  }
}
