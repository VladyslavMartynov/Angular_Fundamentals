import { Component } from '@angular/core';
import { IUser } from "./types";
import { UserService } from "./services/UserService";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  constructor(private userService: UserService) {}

  userList: IUser[] = [];

  ngOnInit(): void {
    this.userService.getUsers()
      .subscribe((user) => {
        this.userList = user;
      })
  }

  removeUser(Id: string): void {
    this.userService.removeUser(Id)
      .subscribe(() => {
        this.userList = this.userList.filter(({ id }) => id !== Id);
      })
  }

  addUser(name: string): void {
    this.userService.addUser(name)
      .subscribe((user) => {
        this.userList.push(user)
      })
  }
}
