import { Component, Input, Output, EventEmitter } from "@angular/core";
import { IUser } from "../types";

@Component({
  selector: 'app-user-list',
  templateUrl: './UserList.component.html',
  styleUrls: ['./UserList.component.scss']
})

export class UserListComponent {
  newUserName: string = '';
  @Input() userList: IUser[] = [];
  @Output() removeUserEvent = new EventEmitter<string>();
  @Output() addUserEvent = new EventEmitter<string>();

  setNewName(event: Event): void {
    this.newUserName = (event.target as HTMLInputElement).value
  }

  addUser() {
    this.addUserEvent.emit(this.newUserName);
    this.newUserName = '';
  }
}
