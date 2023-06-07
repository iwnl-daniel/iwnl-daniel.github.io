document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector("form");
  form.addEventListener("submit", function (event) {
    event.preventDefault();
    const firstNameInput = document.getElementById("fNameInput");
    const lastNameInput = document.getElementById("lNameInput");
    const emailInput = document.getElementById("emailInput");
    const textareaInput = document.getElementById("textInput");
    const firstName = firstNameInput.value.trim();
    const lastName = lastNameInput.value.trim();
    const email = emailInput.value.trim();
    const textarea = textareaInput.value.trim();
    let isValid = true;
    // Check first name
    if (firstName === "") {
      isValid = false;
      firstNameInput.classList.add("is-invalid");
      console.log("First name: is-invalid");
    } else {
      firstNameInput.classList.remove("is-invalid");
      console.log("First name: is-valid");
    }
    // Check last name
    if (lastName === "") {
      isValid = false;
      lastNameInput.classList.add("is-invalid");
      console.log("Last name: is-invalid");
    } else {
      lastNameInput.classList.remove("is-invalid");
      console.log("Last name: is-valid");
    }
    // Check email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      isValid = false;
      emailInput.classList.add("is-invalid");
      console.log("Email: is-invalid");
    } else {
      emailInput.classList.remove("is-invalid");
      console.log("Email: is-valid");
    }
    // Check textarea
    if (textarea === "") {
      isValid = false;
      textareaInput.classList.add("is-invalid");
      console.log("Textarea: is-invalid");
    } else {
      textareaInput.classList.remove("is-invalid");
      console.log("Textarea: is-valid");
    }
    // Submit the form
    if (isValid) {
      form.submit();
    }
  });
});
