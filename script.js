// Reference elements
const signupPage = document.getElementById("signupPage");
const loginPage = document.getElementById("loginPage");
const securedPage = document.getElementById("securedPage");

const signupForm = document.getElementById("signupForm");
const loginForm = document.getElementById("loginForm");
const logoutButton = document.getElementById("logoutButton");

const signupMessage = document.getElementById("signupMessage");
const loginMessage = document.getElementById("loginMessage");

const goToLogin = document.getElementById("goToLogin");
const goToSignup = document.getElementById("goToSignup");

// Event listeners for navigation
goToLogin.addEventListener("click", () => {
    signupPage.classList.add("hidden");
    loginPage.classList.remove("hidden");
    signupMessage.textContent = "";
});

goToSignup.addEventListener("click", () => {
    loginPage.classList.add("hidden");
    signupPage.classList.remove("hidden");
    loginMessage.textContent = "";
});

// Signup functionality
signupForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const username = document.getElementById("signupUsername").value;
    const password = document.getElementById("signupPassword").value;

    if (localStorage.getItem(username)) {
        signupMessage.textContent = "User already exists!";
    } else {
        localStorage.setItem(username, password);
        signupMessage.textContent = "Signup successful! Please login.";
        signupForm.reset();
    }
});

// Login functionality
loginForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const username = document.getElementById("loginUsername").value;
    const password = document.getElementById("loginPassword").value;

    if (localStorage.getItem(username) === password) {
        loginMessage.textContent = "";
        loginForm.reset();
        showSecuredPage();
    } else {
        loginMessage.textContent = "Invalid username or password!";
    }
});

// Logout functionality
logoutButton.addEventListener("click", () => {
    showSignupPage();
});

// Show secured page
function showSecuredPage() {
    securedPage.classList.remove("hidden");
    signupPage.classList.add("hidden");
    loginPage.classList.add("hidden");
}

// Show signup page (default)
function showSignupPage() {
    securedPage.classList.add("hidden");
    signupPage.classList.remove("hidden");
    loginPage.classList.add("hidden");
}
