import { Component } from '@angular/core';

export interface ToDo {
  name: string,
  id?: number,
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'todo App';
  date: Date = new Date();
  todos: ToDo[] = [
    {
      name: 'Wash',
      id: 0,
    },
    {
      name: 'Read',
      id: 1,
    },
    {
      name: 'Walk',
      id: 2,
    },
  ];

  updateTodos(todo: ToDo) {
    this.todos.unshift(todo)
  }

  removeTodo(id: number) {
    this.todos = this.todos.filter(t => t.id != id);
  }
}
