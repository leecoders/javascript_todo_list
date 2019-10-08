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

const fetchBoardsByUserId = () => {
  return fetch(serverUrl + "todo/get-boards", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    }
  })
    .then(res => res.json())
    .then(response => response)
    .catch(error => "error");
};

const fetchListsByBoardId = () => {
  return fetch(serverUrl + "todo/get-lists", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    }
  })
    .then(res => res.json())
    .then(response => response)
    .catch(error => "error");
};

const fetchTodosByListId = () => {
  return fetch(serverUrl + "todo/get-todos", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    }
  })
    .then(res => res.json())
    .then(response => response)
    .catch(error => "error");
};

export {
  fetchUserInfo,
  fetchBoardsByUserId,
  fetchListsByBoardId,
  fetchTodosByListId
};
