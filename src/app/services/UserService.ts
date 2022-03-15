import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { IUser } from "../types";

@Injectable()
export class UserService {
  constructor(private http: HttpClient) {}

  getUsers(): Observable<IUser[]> {
    return this.http.get<IUser[]>('http://localhost:3000/users')
  }

  removeUser(userId: string): Observable<{}> {
    return this.http.delete(`http://localhost:3000/users/${userId}`)
  }

  addUser(userName: string): Observable<IUser> {
    const newUser: Pick<IUser, 'name'> = {
      name: userName
    }
    return this.http.post<IUser>(`http://localhost:3000/users`, newUser)
  }
}
