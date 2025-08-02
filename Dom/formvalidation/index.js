// Select elements using querySelector
const form = document.querySelector("#loginForm");
const emailInput = document.querySelector("#email");
const passwordInput = document.querySelector("#password");
const emailError = document.querySelector("#emailError");
const passwordError = document.querySelector("#passwordError");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const email = emailInput.value.trim();
  const password = passwordInput.value.trim();
  let valid = true;

  // Clear previous error messages
  emailError.textContent = "";
  passwordError.textContent = "";

  //  REGEX Patterns
  const emailPattern = /^\S+@\S+\.\S+$/;
  const passwordPattern = /^(?=.*[A-Z])(?=.*\d).{6,}$/;
  // This means:
  // - At least one uppercase letter
  // - At least one digit
  // - Minimum 6 characters

  //  Validate email using regex
  if (!email) {
    emailError.textContent = "Email is required";
    valid = false;
  } else if (!emailPattern.test(email)) {
    emailError.textContent = "Invalid email format";
    valid = false;
  }

  //  Validate password using regex
  if (!password) {
    passwordError.textContent = "Password is required";
    valid = false;
  } else if (!passwordPattern.test(password)) {
    passwordError.textContent = "Password must be at least 6 characters, contain one uppercase letter and one number";
    valid = false;
  }

  //  If all inputs are valid
  if (valid) {
    alert("Login successful!");
    // You can proceed to backend call or redirect
  }
});
