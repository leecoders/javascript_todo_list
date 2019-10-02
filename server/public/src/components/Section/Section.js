import { $ } from "../../utils/util.js";
import { Modal } from "../Modal/Modal.js";

class Section {
  constructor(parentElement) {
    this.parentElement = parentElement;
    this.render();
  }

  render() {
    this.parentElement.innerHTML = /*html*/ `
      <div class="section-container">
      </div>
    `;
  }
}

export { Section };
