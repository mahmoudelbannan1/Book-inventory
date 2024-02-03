window.addEventListener("load", function () {
  let formErr = document.querySelector("#formError");
  let form = document.querySelector("#login");
  let mail = form.children[0];
  let pass = form.children[1];

  form.onsubmit = async function (e) {
    e.preventDefault();
    formErr.innerText = "";
    const { error, token } = await login({
      email: mail.value,
      password: pass.value,
    });
    if (error) formErr.innerText = error;
    else {
      sessionStorage.setItem("token", token);
      form.innerHTML = "<p>Hello there</p><a href='/books.html'>show books</a>";
    }
  };
});

const login = async function (user, cb) {
  const response = await fetch("/users/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
  });
  return await response.json();
};
