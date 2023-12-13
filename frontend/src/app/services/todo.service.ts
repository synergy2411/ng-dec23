import { Injectable } from '@angular/core';
import { ITodo } from '../types/todo';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  private baseUrl = 'http://localhost:3000';

  constructor(private http: HttpClient) {}

  getTodos(): Observable<ITodo[]> {
    return this.http.get<Array<ITodo>>(`${this.baseUrl}/todos`);
  }

  getTodo(todoId: string): Observable<ITodo> {
    return this.http.get<ITodo>(`${this.baseUrl}/todos/${todoId}`);
  }

  createTodo(title: string, body: string) {
    let newTodo = {
      title,
      body,
    };

    return this.http.post<ITodo>(
      `${this.baseUrl}/todos`,
      JSON.stringify(newTodo),
      {
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );
  }

  deleteTodo(todoId: string) {
    return this.http.delete(`${this.baseUrl}/todos/${todoId}`);
  }
}
