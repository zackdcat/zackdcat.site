console.log("This site is better on pc/fullscreen.")

function applyTheme(dark) {
    const toggle = document.getElementById("toggle");
    document.body.classList.toggle("dark-mode", dark);
    toggle.style.filter = dark ? "invert(1)" : "invert(0)";
    toggle.src = dark ? "/images/toggle_on.svg" : "/images/toggle_off.svg";
    localStorage.setItem("theme", dark ? "dark" : "light");
}

function darklightmodetoggle() {
    applyTheme(!document.body.classList.contains("dark-mode"));
}

document.addEventListener("DOMContentLoaded", () => {
    if (localStorage.getItem("theme") === "dark") {
        applyTheme(true);
    }
});


function copyToClipboard(el) {
    const text = typeof el === "string" ? el : el.dataset.text || el.innerText;
    navigator.clipboard.writeText(text);
    if (typeof el !== "string") {
        const original = el.innerText;
        el.innerText = "Copied!";
        setTimeout(() => el.innerText = original, 1500);
    }
}