import { Component, Input, OnInit } from '@angular/core';
import { Comment } from 'src/app/types/comment';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css'],
})
export class CommentsComponent implements OnInit {
  @Input() comments: Comment[];

  tab = 0;

  constructor() {}

  ngOnInit(): void {}

  onAddComment(newComment: Comment) {
    this.comments.push(newComment);
    this.tab = 1;
  }
}
