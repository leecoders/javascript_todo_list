import { serverUrl } from "../serverConfig/index.js";

const fetchUserInfo = () => {
  return fetch(serverUrl + "todo/user-info", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    }
  })
    .then(res => res.json())
    .then(response => response)
    .catch(error => "error");
};

export { fetchUserInfo };
