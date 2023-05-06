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
    case "/":
      document.querySelector(".mainpage").classList.add("active-button");
      break;
    case "/map":
      ymaps.ready(init);
      document.querySelector(".mappage").classList.add("active-button");
      break;
    case "/time":
      document.querySelector(".timepage").classList.add("active-button");
      break;
  }
};
