import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { UsersComponent } from './components/users/users.component';
import { EncapComponent } from './components/demo/encap/encap.component';
import { UserImageComponent } from './components/users/user-image/user-image.component';
import { UserInfoComponent } from './components/users/user-info/user-info.component';
import { LifeCycleComponent } from './components/demo/life-cycle/life-cycle.component';
import { CommentsComponent } from './components/users/comments/comments.component';
import { HighlightDirective } from './directives/highlight.directive';
import { PipeDemoComponent } from './components/demo/pipe-demo/pipe-demo.component';
import { CountrycodePipe } from './pipes/countrycode.pipe';
import { ReversePipe } from './pipes/reverse.pipe';
import { FilterPipe } from './pipes/filter.pipe';

@NgModule({
  declarations: [
    // component / directive / pipe
    AppComponent,
    UsersComponent,
    EncapComponent,
    UserImageComponent,
    UserInfoComponent,
    LifeCycleComponent,
    CommentsComponent,
    HighlightDirective,
    PipeDemoComponent,
    CountrycodePipe,
    ReversePipe,
    FilterPipe,
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
