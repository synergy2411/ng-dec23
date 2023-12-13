import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

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
import { SortPipe } from './pipes/sort.pipe';
import { CommentFormComponent } from './components/users/comment-form/comment-form.component';
import { AuthComponent } from './components/demo/auth/auth.component';
import { DataService } from './services/data.service';
import { C1Component } from './components/demo/c1/c1.component';
import { C2Component } from './components/demo/c2/c2.component';
import { ObservableDemoComponent } from './components/demo/observable-demo/observable-demo.component';
import { SubjectDemoComponent } from './components/demo/subject-demo/subject-demo.component';
import { TodosComponent } from './components/demo/todos/todos.component';
import { AddTodoComponent } from './components/demo/todos/add-todo/add-todo.component';

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
    SortPipe,
    CommentFormComponent,
    AuthComponent,
    C1Component,
    C2Component,
    ObservableDemoComponent,
    SubjectDemoComponent,
    TodosComponent,
    AddTodoComponent,
  ],
  imports: [
    // Module : custom module / built-in
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [], // Service
  bootstrap: [AppComponent],
})
export class AppModule {}
