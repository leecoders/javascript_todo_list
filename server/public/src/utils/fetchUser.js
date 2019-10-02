const serverUrl = "http://localhost:3000/";

const fetchSignInResult = (userId, userPassword) => {
  return fetch(serverUrl + "auth/signin", {
    method: "POST",
    body: JSON.stringify({ userId, userPassword }),
    headers: {
      "Content-Type": "application/json"
    }
  })
    .then(res => res.json())
    .then(response => response)
    .catch(error => "error");
};

export { fetchSignInResult };
