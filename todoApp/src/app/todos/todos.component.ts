import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';
import {ToDo} from "../app.component";

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent implements OnInit {

  @Input() todo: ToDo;

  @Output() onRemove: EventEmitter<number> = new EventEmitter<number>();

  constructor() { }

  ngOnInit() {
  }

  removeTodo() {
    this.onRemove.emit(this.todo.id);
  }

}
