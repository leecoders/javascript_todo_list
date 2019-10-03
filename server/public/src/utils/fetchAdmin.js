const serverUrl = "http://localhost:3000/";

const fetchAllUsers = () => {
  return fetch(serverUrl + "admin/all-users", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    }
  })
    .then(res => res.json())
    .then(response => response)
    .catch(error => "error");
};

const fetchChangeGrade = (userId, targetGrade) => {
  return fetch(serverUrl + "admin/change-grade", {
    method: "POST",
    body: JSON.stringify({ userId, targetGrade }),
    headers: {
      "Content-Type": "application/json"
    }
  })
    .then(res => res.json())
    .then(response => response)
    .catch(error => "error");
};

export { fetchAllUsers, fetchChangeGrade };
