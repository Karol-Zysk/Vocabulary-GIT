function openpopup(popup) {
  if (popup == null) return;
  popup.classList.add("active");
  overlay.classList.add("active");
}

export function mobileScrolladdBtn(elem) {
  const swBtn = document.querySelector(".mobile-sw-btn");
  const contentBox = document.querySelectorAll(".cnt-bx");

  if (window.matchMedia("(max-width: 500px)").matches) {
    contentBox.forEach((box) => {
      box.addEventListener("click", () =>
        window.scrollTo({
          top: 455,
          behavior: "smooth",
        })
      );
    });
    swBtn.style.display = "grid";
    swBtn.addEventListener("click", () => {
      openpopup(popup);
    });
  }
}
