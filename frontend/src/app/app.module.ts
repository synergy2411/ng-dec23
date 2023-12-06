import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { UsersComponent } from './components/users/users.component';
import { EncapComponent } from './components/demo/encap/encap.component';
import { UserImageComponent } from './components/users/user-image/user-image.component';
import { UserInfoComponent } from './components/users/user-info/user-info.component';
import { LifeCycleComponent } from './components/demo/life-cycle/life-cycle.component';

@NgModule({
  declarations: [
    // component / directive / pipe
    AppComponent,
    UsersComponent,
    EncapComponent,
    UserImageComponent,
    UserInfoComponent,
    LifeCycleComponent,
  ],
  imports: [
    // Module : custom module / built-in
    BrowserModule,
    FormsModule,
  ],
  providers: [], // Service
  bootstrap: [AppComponent],
})
export class AppModule {}
