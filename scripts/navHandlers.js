//Только для роутинга, не для изменения активной ссылки
const buttons = document.querySelectorAll(".navbar-link");
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    route();
  });
});

const updateActiveButtons = (path) => {
  removeActivities();
  switch (path) {
    case "/home":
      document.querySelector('a[href*="home"]').classList.add("active-button");
      break;
    case "/map":
      ymaps.ready(init);
      document.querySelector('a[href*="map"]').classList.add("active-button");
      break;
    case "/time":
      calculateTime();
      document.querySelector('a[href*="time"]').classList.add("active-button");
      break;
  }
};

const removeActivities = () => {
  document.querySelectorAll(".nav-button").forEach((btn) => {
    document.querySelector(".active-button")?.classList.remove("active-button");
  });
};
