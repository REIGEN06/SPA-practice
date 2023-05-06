const links = document.querySelectorAll(".navbar-link");
links.forEach((link) => {
  link.addEventListener("click", () => {
    route();
  });
});

const removeActivities = () => {
  document.querySelectorAll(".nav-button").forEach((btn) => {
    document.querySelector(".active-button")?.classList.remove("active-button");
  });
};
