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
  }

  setLists() {
    this.listArray = [];
    for (let i = 0; i < this.listLength; ++i) {
      this.listArray.push(new List($(".list-container"), i));
    }
  }

  setTodoDragEvent() {
    $("section").addEventListener("mousedown", e => {
      const target = e.target;
      console.log(findAncestorsElement(target, "todo-wrapper"));
      // if (target.className === "todo-wrapper") {
      //   this.dragTarget = target;
      // }
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
