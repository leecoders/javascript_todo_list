import { $ } from "../../utils/util.js";

class Todo {
  constructor(parentElement, todoIdx) {
    this.parentElement = parentElement;
    this.todoIdx = todoIdx;
    this.render();
  }

  getElement() {
    return $(`#todo-wrapper-${this.todoIdx}`);
  }

  render() {
    this.parentElement.insertAdjacentHTML(
      "beforeend",
      /*html*/ `
      <div id="todo-wrapper-${this.todoIdx}" class="todo-wrapper">
        <div class="todo-text-image"></div>
        <div class="todo-content-container">
          <div id="todo-content-${this.todoIdx}" class="todo-content">sdfsasdfdsaklfhjsdlajflkdsjflksdjflkdf</div>
          <div class="todo-info-wrapper">
            <span class="added-by">Added by</span>
            <span id="added-by-id-${this.todoIdx}" class="added-by-id">leecoders</span>
          </div>
        </div>
        <div id="todo-delete-button-${this.todoIdx}" class="todo-delete-button"></div>
      </div>
      `
    );
  }
}

export { Todo };
