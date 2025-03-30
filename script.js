// Script for navigation bar
const bar = document.getElementById("bar");
const close = document.getElementById("close");
const nav = document.getElementById("Navar");

if (bar) {
  bar.addEventListener("click", () => {
    nav.classList.add("active");
  });
}

if (close) {
  close.addEventListener("click", (event) => {
    event.preventDefault(); // Evita que la página se recargue
    nav.classList.remove("active");
  });
}
