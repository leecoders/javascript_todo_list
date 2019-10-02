import { Header } from "../../components/Header/Header.js";
import { Section } from "../../components/Section/Section.js";
import { $ } from "../../utils/util.js";
import { fetchUserInfo } from "../../utils/fetchTodo.js";
import { Menu } from "../../components/Menu/Menu.js";

// fetch test
const serverUrl = "http://localhost:3000/";

document.addEventListener("DOMContentLoaded", async () => {
  const header = new Header($("header"), "todo");
  const section = new Section($("section"));
  const menu = new Menu($(".menu-container"));

  const userInfo = await fetchUserInfo();
  console.log(userInfo);
});
