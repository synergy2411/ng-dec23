import { Component, OnInit } from '@angular/core';
import { ITodo } from '../../../types/todo';
import { TodoService } from 'src/app/services/todo.service';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css'],
})
export class TodosComponent implements OnInit {
  todoCollection: ITodo[];

  constructor(private todoService: TodoService) {}

  ngOnInit(): void {
    this.todoService
      .getTodos()
      .subscribe((data) => (this.todoCollection = data));
  }
}
