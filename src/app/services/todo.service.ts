import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { Todo } from "../model/todo";

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  todos:Todo[];
  constructor() { 
    this.todos =[
      {
        id:"1",
        title:"c++",
        isComplete:true,
        date: new Date()

      },
      {
        id:"2",
        title:"react",
        isComplete:true,
        date: new Date()

      },
      {
        id:"3",
        title:"angular",
        isComplete:false,
        date: new Date()

      },
      {
        id:"4",
        title:"java",
        isComplete:true,
        date: new Date()

      },
      {
        id:"1",
        title:"c++",
        isComplete:true,
        date: new Date()

      },
    ];
  }


  getTodos(){
    return of(this.todos);
  }

  addTodo(todo:Todo){
    this.todos.push(todo)
  }

  changeStatus(todo:Todo){
    this.todos.map( singleToto =>{
      if(singleToto.id==todo.id){
        todo.isComplete=!todo.isComplete;
      }
    } )
  }

  deleteTodo(todo:Todo){
    const indexofTodo=this.todos.findIndex(
      (currentObj)=>currentObj.id==todo.id
    );
    this.todos.splice(indexofTodo,1);
  }


}
