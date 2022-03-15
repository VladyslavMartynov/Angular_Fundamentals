import { Component, Input, Output, EventEmitter } from "@angular/core";

export interface IUser {
  id: string,
  name: string
}

@Component({
  selector: 'app-user-list',
  templateUrl: './UserList.component.html',
  styleUrls: ['./UserList.component.scss']
})

export class UserListComponent {
  @Input() userList: IUser[] = [] as IUser[];
  newUserName: string = '';

  @Output() removeUserEvent = new EventEmitter<IUser['id']>()
  @Output() addUserEvent = new EventEmitter<string>()


  setNewName(event: Event): void {
    this.newUserName = (event.target as HTMLInputElement).value
  }

  addUser() {
    this.addUserEvent.emit(this.newUserName);
    this.newUserName = '';
  }
}
