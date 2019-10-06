import { $ } from "../../utils/util.js";

class Todo {
  constructor(parentElement, todoIdx) {
    this.parentElement = parentElement;
    this.todoIdx = todoIdx;
    this.render();
  }

  render() {
    this.parentElement.insertAdjacentHTML(
      "beforeend",
      /*html*/ `
      <div id="todo-wrapper-${this.todoIdx}" class="todo-wrapper">
        투두입니다.
      </div>
      `
    );
  }
}

export { Todo };
