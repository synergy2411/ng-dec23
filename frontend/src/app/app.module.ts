import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { UsersComponent } from './components/users/users.component';

@NgModule({
  declarations: [
    // component / directive / pipe
    AppComponent,
    UsersComponent,
  ],
  imports: [
    // Module : custom module / built-in
    BrowserModule,
  ],
  providers: [], // Service
  bootstrap: [AppComponent],
})
export class AppModule {}
