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

const updateActiveButtons = (path) => {
  removeActivities();
  switch (path) {
    case "":
      document.querySelector('a[href*="#"]').classList.add("active-button");
      break;
    case "#map":
      ymaps.ready(init);
      document.querySelector('a[href*="#map"]').classList.add("active-button");
      break;
    case "#time":
      document.querySelector('a[href*="#time"]').classList.add("active-button");
      break;
  }
};
