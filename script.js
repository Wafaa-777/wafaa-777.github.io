document.querySelectorAll(".exp-toggle").forEach(button => {
    button.addEventListener("click", () => {
        const extra = button.parentElement.querySelector(".exp-extra");

        extra.classList.toggle("show");

        button.textContent = extra.classList.contains("show")
            ? "Read less ↑"
            : "Read more ↓";
    });
});