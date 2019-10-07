import { $ } from "../../utils/util.js";
import { Modal } from "../Modal/Modal.js";
import { List } from "../List/List.js";

class Section {
  constructor(parentElement) {
    this.parentElement = parentElement;
    this.listLength = 5; // for testing
    this.dragTarget;
    this.render();
    this.doTest();
    // this.setTodoDragEvent();
  }

  doTest() {
    let listArray = [];
    for (let i = 0; i < this.listLength; ++i) {
      listArray.push(new List($(".list-container"), i));
    }
  }

  // setTodoDragEvent() {
  //   $("section").addEventListener("mousedown", e => {
  //     const target = e.target;
  //     if (target.className === "todo-wrapper") {
  //       this.dragTarget = target;
  //     }
  //   });
  // }

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
