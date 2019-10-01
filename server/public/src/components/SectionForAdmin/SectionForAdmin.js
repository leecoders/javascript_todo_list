import { $ } from "../../utils/util.js";

class SectionForAdmin {
  constructor(parentElement) {
    this.parentElement = parentElement;
    this.render();
  }

  render() {
    this.parentElement.innerHTML = /*html*/ `
      <div class="admin-container">
      </div>
    `;
  }
}

export { SectionForAdmin };
