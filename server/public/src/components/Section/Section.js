import { $ } from "../../utils/util.js";

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
