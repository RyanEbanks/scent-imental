const signupFormHandler = async (event) => {
  event.preventDefault();

  const firstName = document.querySelector("#firstname").value.trim();
  const lastName = document.querySelector("#lastname").value.trim();

  const email = document.querySelector("#email").value.trim();
  const password = document.querySelector("#password").value.trim();

  if (email && password && firstName && lastName) {
    const response = await fetch("/api/user", {
      method: "POST",
      body: JSON.stringify({ email, firstName, lastName, password }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      document.location.replace("/");
    } else {
      alert(response.statusText);
    }
  }
};

document
  .querySelector("#signup-form")
  .addEventListener("submit", signupFormHandler);
