window.addEventListener("DOMContentLoaded", () => {
    const animatedElements = document.querySelectorAll(".animate");

    animatedElements.forEach((el) => {
        el.classList.add("fade-in-up");
    });
});
const links = document.querySelectorAll(".nav-link");

window.addEventListener("scroll", () => {
  let current = "";
  document.querySelectorAll("section").forEach((section) => {
    const sectionTop = section.offsetTop;
    if (pageYOffset >= sectionTop - 80) {
      current = section.getAttribute("id");
    }
  });

  links.forEach((link) => {
    link.classList.remove("active");
    if (link.getAttribute("href") === `#${current}`) {
      link.classList.add("active");
    }
  });
});
