import { $ } from "../../utils/util.js";
import { Todo } from "../Todo/Todo.js";

class List {
  constructor(parentElement, listIdx) {
    this.parentElement = parentElement;
    this.listIdx = listIdx;
    this.todoLength = 3; // for testing
    this.render();

    this.doTest();
  }

  doTest() {
    let todoArray = [];
    for (let i = 0; i < this.todoLength; ++i) {
      todoArray.push(new Todo($("#todo-container-" + this.listIdx), i));
    }
  }

  render() {
    this.parentElement.insertAdjacentHTML(
      "beforeend",
      /*html*/ `
      <div id="list-wrapper-${this.listIdx}" class="list-wrapper">
        <div class="list-title-container">
          <span id="todo-counter-${this.listIdx}" class="todo-counter">
            ${this.todoLength}
          </span>
          <span class="list-title">리스트 타이틀</span>
          <span class="list-plus-button"></span>
          <span class="list-delete-button"></span>
        </div>
        <div id="todo-container-${this.listIdx}" class="todo-container">
          <div id="list-add-container-{this.listIdx}" class="list-add-container">
            <textarea class="list-add-textarea"></textarea>
            <div class="list-add-button-container">
              <span class="list-add-add-button">Add</span>
              <span class="list-add-cancel-button">Cancel</span>
            </div>
          </div>
        </div>
      </div>
      `
    );
  }
}

export { List };
