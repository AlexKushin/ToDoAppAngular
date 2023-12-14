import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { ErrorComponent } from './error/error.component';
import { ListTodosComponent } from './list-todos/list-todos.component';
import { LogoutComponent } from './logout/logout.component';
import { authGuard } from './auth/auth.guard';
import { TodoComponent } from './todo/todo.component';

const routes: Routes = [
  {path:"", component: LoginComponent},
  {path:"login", component: LoginComponent},
  {path:"welcome/:name", component: WelcomeComponent, canActivate: [authGuard]},
  {path:"todos", component: ListTodosComponent, canActivate: [authGuard]},
  {path:"logout", component: LogoutComponent, canActivate: [authGuard]},
  {path:"todos/:id", component: TodoComponent, canActivate: [authGuard]},
  {path:"**", component: ErrorComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
