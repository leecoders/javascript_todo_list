import { $ } from "../../utils/util.js";

class Menu {
  constructor(parentElement) {
    this.parentElement = parentElement;
    this.render();
    this.setClickEvent();
  }

  setClickEvent() {
    const menu = $(".menu-container");
    const closeButton = $("#menu-close-button");
    closeButton.addEventListener("click", () => {
      menu.style.right = "-30rem";
    });
  }

  render() {
    this.parentElement.insertAdjacentHTML(
      "beforeend",
      /*html*/ `
      <div class="menu-wrapper">
        <button id="menu-close-button" type="button"></button>
      </div>
    `
    );
  }
}

export { Menu };
