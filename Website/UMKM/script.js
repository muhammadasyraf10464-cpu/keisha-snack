const loginForm = document.getElementById("loginForm");
if (loginForm) {
    loginForm.addEventListener("submit", (e) => {
     e.preventDefault();
    const user = document.getElementById("username").value;
    const pass = document.getElementById("password").value;
    if (user === "user" && pass === "1234"){
        localStorage.setItem("loggedIn", "true");
        window.location.href = "menu.html";
    } else {
        alert("Username atau password salah");
    }
    });
}

if (window.location.pathname.includes("menu,html")) {
    const insLoggedIn = localStorage.getItem("loggeedIn");
    if (!isLoggedIn){
        window.location.href = "index.html";
    }
}
 
function logout() {
    alert("Anda telah logout!")
    window.location.href = "login.html";
}