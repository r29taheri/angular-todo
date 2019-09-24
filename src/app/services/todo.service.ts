import { Injectable } from '@angular/core';
import { Todo } from './../models/todo';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  tasks: Array<Todo> = new Array<Todo>();
  constructor() { }
  id: number = 1;
  addTask(title: string, description: string) {
    this.tasks.push(new Todo(this.id, title, description, false))
    this.id += 1;
  }
  getTasks() {
    return this.tasks;
  }
  getTasksFromCache(tasks: Array<Todo>) {
    this.tasks = tasks;
    this.id = tasks.length + 1;
  }
  getTask(id: number) {
    return this.tasks.find(task => task.id === id);
  }
  changeStatus(id: number, done: boolean) {
    for (var i in this.tasks) {
      if (this.tasks[i].id == id) {
        this.tasks[i].done = done;
        return;
      }
    }
  }
  updateDescription(id: number, description: string) {
    for (var i in this.tasks) {
      if (this.tasks[i].id == id) {
        this.tasks[i].description = description;
        break;
      }
    }
  }
  deleteTask(index: number) {
    this.tasks.splice(index, 1);
  }
  updateTask(id: number, title: string, description: string, done: boolean) {
    for (var i in this.tasks) {
      if (this.tasks[i].id == id) {
        this.tasks[i].title = title;
        this.tasks[i].description = description;
        this.tasks[i].done = done;
        break;
      }
    }
  }
}