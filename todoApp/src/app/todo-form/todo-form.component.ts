import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { ToDo } from '../shared/interfaces';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.scss']
})
export class TodoFormComponent implements OnInit {

  @Output() onAdd:EventEmitter<ToDo> = new EventEmitter<ToDo>();

  name = '';

  constructor() { }

  ngOnInit() {
  }

  addToDo() {
    if(this.name.trim()) {
      let id: number = (new Date()).getMilliseconds();
      const todo: ToDo = {
        name: this.name,
        id,
      };

      this.onAdd.emit(todo);
      this.name = '';
      console.log(id)
    }
  };
}
