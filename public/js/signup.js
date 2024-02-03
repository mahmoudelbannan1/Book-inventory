window.addEventListener("load", function () {
  let formErr = document.querySelector("#formError");
  let form = document.querySelector("#login");
  let username = form.children[0];
  let email = form.children[1];
  let password = form.children[2];
  let user;

  form.onsubmit = async function (e) {
    e.preventDefault();
    user = {
      username: username.value,
      email: email.value,
      password: password.value,
    };
    formErr.innerText = "";
    const result = await register(user);
    if (result.error) formErr.innerText = result.error;
    else {
      sessionStorage.removeItem("token");
      form.innerHTML = "<p>Hello there</p><a href='/login.html'>log in now</a>";
    }
  };
});

const register = async function (user) {
  const response = await fetch("/users/register", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
  });
  return await response.json();
};
