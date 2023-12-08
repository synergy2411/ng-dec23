import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Comment } from 'src/app/types/comment';

@Component({
  selector: 'app-comment-form',
  templateUrl: './comment-form.component.html',
  styleUrls: ['./comment-form.component.css'],
})
export class CommentFormComponent implements OnInit {
  @Output() newCommentEvent = new EventEmitter<Comment>();
  constructor() {}

  ngOnInit(): void {}

  onSubmit(myForm: NgForm) {
    console.log(myForm);
    let newComment: Comment = { ...myForm.value };
    this.newCommentEvent.emit(newComment);
  }
}
