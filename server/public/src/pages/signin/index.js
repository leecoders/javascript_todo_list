import { $ } from "../../utils/util.js";
import { fetchSignInResult } from "../../utils/fetchSignin.js";

const tryLogin = async () => {
  const id = $("#sign-in-id").value;
  const password = $("#sign-in-password").value;
  const loginResult = await fetchSignInResult(id, password);

  if (loginResult.message == "success") {
    location.href = `../todo`;
  } else {
  }
};

const loginButton = $("#sign-in-button");
const inputPassword = $("#sign-in-password");
loginButton.addEventListener("click", async () => {
  tryLogin();
});

inputPassword.addEventListener("keydown", async e => {
  if (e.key == "Enter") {
    tryLogin();
  }
});
