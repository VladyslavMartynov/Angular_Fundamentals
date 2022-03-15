import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from "@angular/common/http";
import { AppComponent } from './app.component';
import { UserListModule } from "./UserList/UserList.module";
import { UserService } from "./services/UserService";


@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    UserListModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule {}
