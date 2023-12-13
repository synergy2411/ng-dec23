import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { TodoService } from 'src/app/services/todo.service';
import { ITodo } from 'src/app/types/todo';

@Component({
  selector: 'app-edit-todo',
  templateUrl: './edit-todo.component.html',
  styleUrls: ['./edit-todo.component.css'],
})
export class EditTodoComponent implements OnInit {
  @Input() todo: ITodo;
  @Output() editEvent = new EventEmitter();

  constructor(private todoService: TodoService) {}

  ngOnInit(): void {}

  onDelete() {
    if (
      confirm('Are you sure to delete this item - ' + this.todo.title + '?')
    ) {
      this.todoService.deleteTodo(this.todo.id).subscribe((data) => {
        console.log('DELETED SUCCESSFULLY ', data);
        this.editEvent.emit(this.todo.id);
      });
    }
  }

  onEdit() {
    // Open the add new component from here
  }
}
