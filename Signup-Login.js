document.addEventListener("DOMContentLoaded", () => {
  const loginTab = document.getElementById("loginTab");
  const signupTab = document.getElementById("signupTab");
  const loginForm = document.getElementById("loginForm");
  const signupForm = document.getElementById("signupForm");

  const switchToSignup = document.getElementById("switchToSignup");
  const switchToLogin = document.getElementById("switchToLogin");
  const formHeading = document.getElementById("formHeading");


  loginTab.addEventListener("click", () => {
    loginTab.classList.add("active");
    signupTab.classList.remove("active");
    loginForm.classList.add("active");
    signupForm.classList.remove("active");
    formHeading.textContent = "Login Form";
  });
  
  signupTab.addEventListener("click", () => {
    signupTab.classList.add("active");
    loginTab.classList.remove("active");
    signupForm.classList.add("active");
    loginForm.classList.remove("active");
    formHeading.textContent = "Signup Form";
  });
  
  switchToSignup.addEventListener("click", (e) => {
    e.preventDefault();
    signupTab.click();
  });

  switchToLogin.addEventListener("click", (e) => {
    e.preventDefault();
    loginTab.click();
  });

  // Optional: Form submission
  loginForm.addEventListener("submit", (e) => {
    e.preventDefault();
    alert("Logged in successfully!");
  });

  signupForm.addEventListener("submit", (e) => {
    e.preventDefault();
    alert("Signup complete!");
  });
});
