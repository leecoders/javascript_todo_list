import { $ } from "../../utils/util.js";

class Header {
  constructor(parentElement, pageName) {
    this.parentElement = parentElement;
    this.pageName = pageName;
    this.render();
    this.menubutton = $("#user-button");
    this.setClickEvent();
  }

  setClickEvent() {
    this.menubutton.addEventListener("click", () => {
      const menu = $(".menu-container");
      $(".body-area").style.zIndex = "100";
      menu.style.right = "0rem";
    });
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
