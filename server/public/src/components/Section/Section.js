import { $ } from "../../utils/util.js";
import { Modal } from "../Modal/Modal.js";
import { List } from "../List/List.js";

class Section {
  constructor(parentElement) {
    this.parentElement = parentElement;
    this.listLength = 3; // for testing
    this.render();
    this.doTest();
  }

  doTest() {
    let listArray = [];
    for (let i = 0; i < 3; ++i) {
      listArray.push(new List($(".list-container"), i));
    }
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
