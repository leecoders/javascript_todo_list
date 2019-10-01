const serverUrl = "http://localhost:3000/";

const fetchSignInResult = (id, password) => {
  return fetch(serverUrl + "signin/submit", {
    method: "POST",
    body: JSON.stringify({ id, password }),
    headers: {
      "Content-Type": "application/json"
    }
  })
    .then(res => res.json())
    .then(response => response)
    .catch(error => "error");
};

export { fetchSignInResult };
