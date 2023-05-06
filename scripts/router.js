"use strict";

const route = (event) => {
  event = event || window.event;
  event.preventDefault();
  window.history.pushState({}, "", event.target.href);
  handleLocation();
};

const routes = {
  "": "/pages/activity.html",
  "#map": "/pages/map.html",
  "#time": "/pages/time.html",
};

const handleLocation = async () => {
  const path = window.location.hash;
  console.log(path);
  const html = await fetch(routes[path]).then((data) => data.text());
  document.getElementById("app").innerHTML = html;
  removeActivities();

  switch (path) {
    case "":
      document.querySelector(".mainpage").classList.add("active");
      break;
    case "#map":
      ymaps.ready(init);
      document.querySelector(".mappage").classList.add("active");
      break;
    case "#time":
      document.querySelector(".timepage").classList.add("active");
      break;
  }
};

// Отслеживает back, go
window.onpopstate = handleLocation;

// Для начальной обработки
window.onload = handleLocation();
