import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ITodo } from '../../../../types/todo';
import { TodoService } from 'src/app/services/todo.service';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css'],
})
export class AddTodoComponent implements OnInit {
  title = '';
  body = '';

  @Output() displayEvent = new EventEmitter<ITodo>();

  constructor(private todoService: TodoService) {}

  ngOnInit(): void {}

  onAddTodo() {
    this.todoService.createTodo(this.title, this.body).subscribe(
      (data) => {
        this.displayEvent.emit(data);
      },
      (err) => console.error(err)
    );
  }
}
