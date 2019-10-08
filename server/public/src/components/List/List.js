import { $ } from "../../utils/util.js";
import { Todo } from "../Todo/Todo.js";

class List {
  constructor(parentElement, listIdx, list) {
    this.parentElement = parentElement;
    this.listIdx = listIdx;
    this.list = list;
    this.render();
    this.listWrapper = $(`#list-wrapper-${this.listIdx}`);
    this.listHead = $(`#list-head-${this.listIdx}`);
    this.todoContainer = $(`#todo-container-${this.listIdx}`);
    this.setTodoContainerSize();
    this.setPlusTodoEvent();
    this.setChangeTextareaEvent();
    this.setTodos();
  }

  setTodos() {
    this.todoArray = [];
    for (let i = 0; i < this.list.todos.length; ++i) {
      this.todoArray.push(
        new Todo($("#todo-container-" + this.listIdx), this.list.todos[i])
      );
    }
  }

  setTodoContainerSize() {
    const heightSum = this.listWrapper.getBoundingClientRect().height;
    const heightHead = this.listHead.getBoundingClientRect().height;
    this.todoContainer.style.height = heightSum - heightHead + "px";
  }

  setPlusTodoEvent() {
    this.listAddContainer = $(`#list-add-container-${this.listIdx}`);
    this.listPlusButton = $(`#list-plus-button-${this.listIdx}`);
    this.listPlusButton.addEventListener("click", () => {
      if (this.listAddContainer.style.display === "block") {
        this.listAddContainer.style.display = "none";
      } else {
        this.listAddContainer.style.display = "block";
      }
      this.setTodoContainerSize();
    });
  }

  setChangeTextareaEvent() {
    this.todoAddTextArea = $(`#list-add-textarea-${this.listIdx}`);
    this.todoAddTextArea.addEventListener("keyup", e => {
      if (!!e.target.value.length) {
        this.listAddContainer.style.opacity = 1;
      } else {
        this.listAddContainer.style.opacity = 0.7;
      }
    });
  }

  render() {
    this.parentElement.insertAdjacentHTML(
      "beforeend",
      /*html*/ `
      <div id="list-wrapper-${this.listIdx}" class="list-wrapper">
        <div id="list-head-${this.listIdx}" class="list-head-container">
          <div class="list-title-container">
            <span id="todo-counter-${this.listIdx}" class="todo-counter">
              ${this.list.todos.length}
            </span>
            <span class="list-title">${this.list.name}</span>
            <span id="list-plus-button-${this.listIdx}" class="list-plus-button"></span>
            <span id="list-delete-button-${this.listIdx}" class="list-delete-button"></span>
          </div>
          <div id="list-add-container-${this.listIdx}" class="list-add-container">
            <textarea id="list-add-textarea-${this.listIdx}" class="list-add-textarea" placeholder="Enter a note"></textarea>
            <div class="list-add-button-container">
              <span id="list-add-add-button-${this.listIdx}" class="list-add-add-button">Add</span>
              <span id="list-add-cancel-button-${this.listIdx}" class="list-add-cancel-button">Cancel</span>
            </div>
          </div>
        </div>
        <div id="todo-container-${this.listIdx}" class="todo-container">
        </div>
      </div>
      `
    );
  }
}

export { List };
