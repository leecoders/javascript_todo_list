import sectionTemplate from "./template.js";
import { $ } from "../../utils/util.js";

class Section {
  constructor(parentElement) {
    this.parentElement = parentElement;
    this.render();
  }

  render() {
    this.parentElement.innerHTML = sectionTemplate;
  }
}

export { Section };
