import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { API_URL, TODO_JPA_API_URL } from 'src/app/app.constants';
import { Todo } from 'src/app/list-todos/list-todos.component';

@Injectable({
  providedIn: 'root'
})
export class TodoDataService {

  constructor(private http: HttpClient) { }

  retreiveAllTodos(username: string) {
  //console.log("execute Hello World Bean Service")
    return this.http.get<Todo[]>(`${TODO_JPA_API_URL}/users/${username}/todos`);
  }

  retreiveTodo(username: string, id:number) {
    //console.log("execute Hello World Bean Service")
    return this.http.get<Todo>(`${TODO_JPA_API_URL}/users/${username}/todos/${id}`);
  }

  updateTodo(username: string, id:number, todo: Todo) {
    //console.log("execute Hello World Bean Service")
    return this.http.put(`${TODO_JPA_API_URL}/users/${username}/todos/${id}`, todo);
  }

  createTodo(username: string, todo: Todo) {
    //console.log("execute Hello World Bean Service")
    return this.http.post(`${TODO_JPA_API_URL}/users/${username}/todos`, todo);
  }
  deleteTodo(username: string, id: number) {
    return this.http.delete(`${TODO_JPA_API_URL}/users/${username}/todos/${id}`)
  }
}
