import { $ } from "../../utils/util.js";

class Todo {
  constructor(parentElement, todo) {
    this.parentElement = parentElement;
    this.todo = todo;
    this.render();
  }

  getElement() {
    return $(`#todo-wrapper-${this.todo.order}`);
  }

  // this.todoIdx가 아닌 DB에 저장된 실제 todo 카드의 아이디를 DOM 아이디로 사용하도록 변경할 필요가 있음
  render() {
    this.parentElement.insertAdjacentHTML(
      "beforeend",
      /*html*/ `
      <div id="todo-wrapper-${this.todo.id}" class="todo-wrapper">
        <div class="todo-text-image"></div>
        <div class="todo-content-container">
          <div class="todo-content">sdfsasdfdsaklfhjsdlajflkdsjflksdjflkdf</div>
          <div class="todo-info-wrapper">
            <span class="added-by">Added by</span>
            <span class="added-by-id">leecoders</span>
          </div>
        </div>
        <div id="todo-delete-button-${this.todo.id}" class="todo-delete-button"></div>
      </div>
      `
    );
  }
}

export { Todo };
