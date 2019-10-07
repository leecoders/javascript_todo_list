import { $, findAncestorsElement } from "../../utils/util.js";
import { Modal } from "../Modal/Modal.js";
import { List } from "../List/List.js";

class Section {
  constructor(parentElement) {
    this.parentElement = parentElement;
    this.listLength = 5; // for testing
    this.dragTarget;
    this.render();
    this.setLists();
    this.setTodoDragEvent();
    this.setListMouseEnterEvent();
  }

  setLists() {
    this.listArray = [];
    for (let i = 0; i < this.listLength; ++i) {
      this.listArray.push(new List($(".list-container"), i));
    }
  }

  setListMouseEnterEvent() {
    this.listArray.forEach((list, idx) => {
      $(`#todo-container-${idx}`).addEventListener("mouseenter", e => {
        if (!this.dragTarget) return;
      });
    });
  }

  setTodoDragEvent() {
    $("section").addEventListener("mousedown", e => {
      const target = e.target;
      const todo = findAncestorsElement(target, "todo-wrapper");
      if (todo.className !== "todo-wrapper") return;
      const todoX = todo.getBoundingClientRect().x;
      const todoY = todo.getBoundingClientRect().y;
      this.dragStartX = e.clientX; // 마우스 시작 좌표
      this.dragStartY = e.clientY;
      this.dragTodoX = todoX;
      this.dragTodoY = todoY - 7.5;
      this.dragTarget = todo.cloneNode(true);
      this.dragTarget.style.left = this.dragTodoX + "px";
      this.dragTarget.style.top = this.dragTodoY + "px"; // margin-top 보정
      this.dragTarget.classList.add("dragging");
      this.todo = todo;
      todo.style.opacity = "0.5";
      $("section").appendChild(this.dragTarget);
    });
    $("section").addEventListener("mousemove", e => {
      if (!this.dragTarget) return;
      const relativeX = e.clientX - this.dragStartX;
      const relativeY = e.clientY - this.dragStartY;
      this.dragTarget.style.left = this.dragTodoX + relativeX + "px";
      this.dragTarget.style.top = this.dragTodoY + relativeY + "px";
      e.stopPropagation();
      e.preventDefault();
    });
    $("section").addEventListener("mouseup", e => {
      if (!this.dragTarget) return;
      this.dragTarget.remove();
      this.dragTarget = undefined;
    });
  }

  render() {
    this.parentElement.innerHTML = /*html*/ `
      <div class="section-container">
        <div class="section-title-container">
          투두 타이틀
        </div>
        <div class="list-container"></div>
      </div>
    `;
  }
}

export { Section };
