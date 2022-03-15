import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { UserListComponent } from "./UserList.component";

@NgModule({
  declarations: [UserListComponent],
  imports: [CommonModule],
  exports: [UserListComponent]
})

export class UserListModule {}
