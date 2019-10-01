import { $ } from "../../utils/util.js";

class Header {
  constructor(parentElement, pageName) {
    this.parentElement = parentElement;
    this.pageName = pageName;
    this.render();
  }
  render() {
    this.parentElement.innerHTML = /*html*/ `
      <span>TODO</span>
      <div class="menu-wrapper">
      </div>
      <div class="user-wrapper">
          <button id="user-button" type="button"></button>
          <div class="user-bubble-container"></div>
      </div>
    `;
  }
}

export { Header };
