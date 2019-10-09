import { $ } from "../../utils/util.js";

class Todo {
  constructor(parentElement, todo, { handleDeleteTodoClicked }) {
    this.parentElement = parentElement;
    this.todo = todo;
    this.handleDeleteTodoClicked = handleDeleteTodoClicked;
    this.render();
    this.init();
  }

  init() {
    this.deleteTodoButton = $(`#todo-delete-button-${this.todo.id}`);
    this.setDeleteButtonEvent();
  }

  getElement() {
    return $(`#todo-wrapper-${this.todo.order}`);
  }

  setDeleteButtonEvent() {
    this.deleteTodoButton.addEventListener("click", e => {
      this.handleDeleteTodoClicked(e.target.id.split("button-")[1], e.target);
    });
  }
  render() {
    this.parentElement.insertAdjacentHTML(
      "beforeend",
      /*html*/ `
      <div id="todo-wrapper-${this.todo.id}" class="todo-wrapper">
        <div class="todo-text-image"></div>
        <div class="todo-content-container">
          <div class="todo-content">${this.todo.content}</div>
          <div class="todo-info-wrapper">
            <span class="added-by">Added by</span>
            <span class="added-by-id">${this.todo.addedBy}</span>
          </div>
        </div>
        <div id="todo-delete-button-${this.todo.id}" class="todo-delete-button"></div>
      </div>
      `
    );
  }
}

export { Todo };
