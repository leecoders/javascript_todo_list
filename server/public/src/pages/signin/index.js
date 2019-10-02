import { $, isOutSideOfLayerClicked } from "../../utils/util.js";
import { fetchSignInResult } from "../../utils/fetchSignin.js";
import { Modal } from "../../components/Modal/Modal.js";

const alertFailure = () => {
  const message = "입력한 정보를 다시 확인해주세요.";
  const modal = new Modal($(".body-area"), message).getElement();
};

const tryLogin = async () => {
  const id = $("#sign-in-id").value;
  const password = $("#sign-in-password").value;
  const loginResult = await fetchSignInResult(id, password);

  if (loginResult.message == "success") {
    location.href = `../todo`;
    return;
  } else {
    alertFailure();
    console.log(loginResult.message);
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

$("body").addEventListener("click", e => {
  const layer = $(".modal-wrapper");
  if (!layer) return;
  if (isOutSideOfLayerClicked(layer, e)) {
    layer.remove();
    $(".outside").style.display = "none";
    $("body").style.overflow = "scroll";
  }
});
