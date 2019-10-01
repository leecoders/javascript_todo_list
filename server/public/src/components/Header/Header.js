import headerTemplate from "./template.js";
import { $, toggleUserClickState } from "../../utils/util.js";

class Header {
  constructor(parentElement, pageName) {
    this.parentElement = parentElement;
    this.pageName = pageName;
    this.render();
  }
  render() {
    this.parentElement.innerHTML = headerTemplate;
  }
}

export { Header };
