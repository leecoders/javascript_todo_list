import { $ } from "../../utils/util.js";

class Header {
  constructor(parentElement, pageName) {
    this.parentElement = parentElement;
    this.pageName = pageName;
    this.render();
    this.menubutton = $("#menu-button");
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
      <div class="menu-button-wrapper">
          <button id="menu-button" type="button"></button>
      </div>
    `;
  }
}

export { Header };
