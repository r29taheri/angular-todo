import { Component, OnInit } from '@angular/core';
import { TodoService } from './../../services/todo.service';
import { Todo } from 'src/app/models/todo';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss']
})
export class TasksComponent implements OnInit {
  tasks: Array<Todo> = new Array<Todo>();
  editMode: number = 0;
  constructor(private todos: TodoService) { }

  getTasks() {
    const tasks = JSON.parse(localStorage.getItem("tasks"));
    if(tasks)
      this.todos.getTasksFromCache(tasks);
    this.tasks = this.todos.getTasks();
  }
  onCreate(info: NgForm) {
    this.todos.addTask(info.value.title, info.value.description);
    info.resetForm();
    this.saveTasks();
  }
  onComplete(item: any) {
    this.todos.changeStatus(item.id, !item.done);
    this.saveTasks();
  }
  onEdit(task: any, el: HTMLInputElement) {
    this.todos.updateDescription(task.id, el.value);
    this.editMode = 0;
    this.saveTasks();
  }
  onDelete(task: any) {
    const index = this.tasks.indexOf(task);
    this.todos.deleteTask(index);
    this.saveTasks();
  }
  saveTasks() {
    localStorage.setItem("tasks", JSON.stringify(this.tasks));
  }
  ngOnInit() {
    this.getTasks();
  }

}
