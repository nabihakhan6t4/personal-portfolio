function toggleForm(event) {
  event.preventDefault();

  const cardTitle = document.querySelector(".card-title");
  const loginForm = document.getElementById("loginForm");

  if (cardTitle.textContent === "Login") {
    cardTitle.textContent = "Sign Up";

    loginForm.innerHTML = `
        <div class="mb-3">
          <label for="signUpEmail" class="form-label">Email address</label>
          <div class="input-group">
            <span class="input-group-text"><i class="fas fa-envelope"></i></span>
            <input type="email" class="form-control" id="signUpEmail" required>
          </div>
        </div>
        <div class="mb-3">
          <label for="signUpPassword" class="form-label">Password</label>
          <div class="input-group">
            <span class="input-group-text"><i class="fas fa-lock"></i></span>
            <input type="password" class="form-control" id="signUpPassword" required>
          </div>
        </div>
        <div class="mb-3">
          <label for="signUpConfirmPassword" class="form-label">Confirm Password</label>
          <div class="input-group">
            <span class="input-group-text"><i class="fas fa-lock"></i></span>
            <input type="password" class="form-control" id="signUpConfirmPassword" required>
          </div>
        </div>
        <button type="submit" class="btn btn-primary w-100">Sign Up</button>
      `;

    document.querySelector(
      ".text-center p"
    ).innerHTML = `Already have an account? <a href="#" id="toggleSignUp">Login</a>`;
  } else {
    cardTitle.textContent = "Login";

    loginForm.innerHTML = `
        <div class="mb-3">
          <label for="loginEmail" class="form-label">Email address</label>
          <div class="input-group">
            <span class="input-group-text"><i class="fas fa-envelope"></i></span>
            <input type="email" class="form-control" id="loginEmail" required>
          </div>
        </div>
        <div class="mb-3">
          <label for="loginPassword" class="form-label">Password</label>
          <div class="input-group">
            <span class="input-group-text"><i class="fas fa-lock"></i></span>
            <input type="password" class="form-control" id="loginPassword" required>
          </div>
        </div>
        <button type="submit" class="btn btn-primary w-100">Login</button>
      `;

    document.querySelector(
      ".text-center p"
    ).innerHTML = `Don't have an account? <a href="#" id="toggleSignUp">Sign Up</a>`;
  }

  // Add event listener for the new link
  const newToggle = document.getElementById("toggleSignUp");
  if (newToggle) {
    newToggle.addEventListener("click", toggleForm);
  }
}

// Ensure initial state is set correctly
document.addEventListener("DOMContentLoaded", () => {
  const toggleLink = document.getElementById("toggleSignUp");
  if (toggleLink) {
    toggleLink.addEventListener("click", toggleForm);
  }
});
