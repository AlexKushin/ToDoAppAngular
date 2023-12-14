import { Component, OnInit } from '@angular/core';
import { TodoDataService } from '../service/data/todo-data.service';
import { Todo } from '../list-todos/list-todos.component';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  id: number = this.route.snapshot.params["id"]
  todo: Todo = new Todo(this.id, '', false, new Date());


  constructor(
    private todoService: TodoDataService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    if (this.id != -1) {
      this.todoService.retreiveTodo("AlexKushyn", this.id).subscribe(
        data => this.todo = data
      )
    }
  }


  saveTodo() {
    if (this.id == -1) {
      console.log("Todo has been created")
      this.todoService.createTodo("AlexKushyn", this.todo).subscribe(
        data => {
          console.log(data)
          this.router.navigate(['todos'])
        }
      )
    } else {
      console.log(this.todo)
      this.todoService.updateTodo("AlexKushyn", this.id, this.todo).subscribe(
        data => {
          console.log(data)
          this.router.navigate(['todos'])
        }

      )
    }
  }

}
