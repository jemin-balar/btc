document.addEventListener("DOMContentLoaded", function () {
    var authToken = localStorage.getItem("authToken");
    var currentPath = window.location.pathname;

    var publicRoutes = ["login.html", "registration.html"];

    if (!authToken) {
        if (!publicRoutes.includes(currentPath)) {
            window.location.href = "login.html";
        }
    } else {
        if (publicRoutes.includes(currentPath)) {
            window.location.href = "index.html";
        } else {
            var menu = document.getElementById("menu");
            if (menu) {
                menu.innerHTML = `
                    <li><a href="#" onclick="logout()">Logout</a></li>
                `;
            }
        }
    }
});

function logout() {
    localStorage.removeItem("authToken");
    window.location.href = "login.html";
}