import { Injectable } from '@angular/core';

import { ToDo } from './shared/interfaces';
import { todos } from './shared/data';

@Injectable({
  providedIn: 'root'
})

export class TodoService {
  todos: ToDo[] = todos;

  updateTodos(todo: ToDo) {
    this.todos.unshift(todo)
  }

  removeTodo(id: number) {
    this.todos = this.todos.filter(t => t.id != id);
  }
}
