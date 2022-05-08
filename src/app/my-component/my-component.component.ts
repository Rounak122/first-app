import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-component',
  templateUrl: './my-component.component.html',
  styleUrls: ['./my-component.component.css']
})
export class MyComponentComponent implements OnInit {

  // constructor is executed when the component is first created.
  constructor() {

    this.enableBtnAfterTimeout();

  }

  ngOnInit(): void {
  }

  /*
    DataBinding using String interpolation
  */
  name: string = "Rounak"; // varibles can be accessed in html using
  status: string = "Offline";
  disabled: boolean = true;
  todo: string = "";

  todoElement: string = '';
  addTodoClicked: boolean = false;

  todoList: string[] = []


  getStatus() { // functions can be accessed in html
    return this.status;
  }
  enableBtnAfterTimeout() { // functions can be accessed in html
    setTimeout(() => {
      this.disabled = false;
    }, 2000);
  }

  isDisabled() {
    return this.disabled;
  }

  onCLickEnable() {
    this.status = "Online"
  }

  onUpdateTodo(event: any) {
    this.todo = "you have to " + event.target.value;
    // console.log(event);
  }

  onAddTodo() {
    this.addTodoClicked = true;
    this.todoList.push(this.todoElement);
  }

  getActiveStatus() {
    if (this.addTodoClicked == true && this.todoElement != '') {
      return 'green'
    } else {
      return 'red'
    }
  }
}
