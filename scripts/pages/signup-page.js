// Helpers
import DOMHandler from "../dom-handler.js";

// Services
import { signup } from "../services/session-service.js";

// Draws page
function render() {
  const { signupError } = SignupPage.state

  return `
    <section>
      <div class="header">Signup</div>
      <form class="form signup-form">
          <input type="text" id="email" name="email" required placeholder="email" />
          <input type="text" id="password" name="password" required placeholder="password" />
          ${signupError ? `<p> ${signupError}</p>` : ""}
          <div class="footer-links">
          <a href="" class="signup">Login</a>
          <button class="button button--primary">Create account</button>
          </div>
      </form>
    </section>
  `
}

// Creates functions for page listeners
function listenSignup() {
  const loginForm = document.querySelector(".signup-form");

  loginForm.addEventListener("submit", async (event) => {
    try {
      event.preventDefault();
      console.log(event.target)
      const { email, password } = event.target;

      const data = {
        email: email.value,
        password: password.value,
      };

      const user = await signup(data);
      alert("Se creo " + user.id)

    } catch (error) {
      SignupPage.state.signupError = error.message;
      DOMHandler.reload();
    }
  })
}

// Creates object to export
const SignupPage = {
  toString() {
    return render();
  },
  addListeners() {
    listenSignup();
  },
  state: {
    signupError: null,
  }
}

export default SignupPage