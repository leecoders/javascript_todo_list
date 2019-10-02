import { Header } from "../../components/Header/Header.js";
import { Section } from "../../components/Section/Section.js";
import { $ } from "../../utils/util.js";

// fetch test
const serverUrl = "http://localhost:3000/";

const fetchTest = () => {
  return fetch(serverUrl + "test", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    }
  })
    .then(res => res.json())
    .then(response => response)
    .catch(error => "error");
};

const header = new Header($("header"), "todo");
const section = new Section($("section"));

document.addEventListener("DOMContentLoaded", () => {
  (async () => {
    const result = await fetchTest();
    console.log(result);
  })();
});
