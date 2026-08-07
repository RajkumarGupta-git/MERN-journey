const btn = document.getElementById("themeBtn");
let savedTheme = localStorage.getItem("theme");

if (savedTheme === "dark") {
    document.body.classList.add("dark");
    btn.innerHTML = " Light Mode";
}

btn.addEventListener("click", () => {
    document.body.classList.toggle("dark");
    if (document.body.classList.contains("dark")) {
        btn.innerHTML = " Light Mode";
        localStorage.setItem("theme", "dark");
    } else {
        btn.innerHTML = " Dark Mode";
        localStorage.setItem("theme", "light");
    }
});