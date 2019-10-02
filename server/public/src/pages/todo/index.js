import { Header } from "../../components/Header/Header.js";
import { Section } from "../../components/Section/Section.js";
import { $ } from "../../utils/util.js";
import { fetchUserInfo } from "../../utils/fetchTodo.js";

// fetch test
const serverUrl = "http://localhost:3000/";

document.addEventListener("DOMContentLoaded", async () => {
  const header = new Header($("header"), "todo");
  const section = new Section($("section"));

  const userInfo = await fetchUserInfo();
  console.log(userInfo);
});
