import { $, findAncestorsElement } from "../../utils/util.js";
import { Modal } from "../Modal/Modal.js";
import { List } from "../List/List.js";

class Section {
  constructor(parentElement) {
    this.parentElement = parentElement;
    this.listLength = 3; // for testing
    this.dragTarget;
    this.render();
    this.setLists();
    this.setTodoDragEvent();
    this.setListMouseEnterEvent();
    this.setTodoMouseEnterEvent();
  }

  setLists() {
    this.listArray = [];
    for (let i = 0; i < this.listLength; ++i) {
      this.listArray.push(new List($(".list-container"), i));
    }
  }

  setTodoMouseEnterEvent() {
    Array.prototype.forEach.call(
      document.querySelectorAll(".todo-wrapper"),
      todo => {
        todo.addEventListener("mousemove", e => {
          if (!this.dragTarget) return;
          if (todo === this.todo) return; // this.todo(드래그 source)가 이벤트를 받으면 안됨
          const todoContainer = todo.parentNode;
          const mouseY = e.clientY;
          const top = todo.getBoundingClientRect().top;
          const bottom = todo.getBoundingClientRect().bottom;
          this.todo.remove();
          if (mouseY - top > bottom - mouseY) {
            if (!!todo.nextElementSibling) {
              todoContainer.insertBefore(this.todo, todo.nextElementSibling);
            } else {
              todoContainer.appendChild(this.todo);
            }
          } else {
            todoContainer.insertBefore(this.todo, todo);
          }
        });
      }
    );
  }

  setListMouseEnterEvent() {
    this.listArray.forEach((list, idx) => {
      $(`#todo-container-${idx}`).addEventListener("mouseenter", e => {
        if (!this.dragTarget) return;
        const target = e.target;
        this.todo.remove(); // 지워도 변수에 DOM이 남아있다!
        target.appendChild(this.todo); // 그래서 재사용 가능! (또 remove하면 참조가 남아서 또 지워짐!)
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
      this.todo.style.opacity = "1";
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
