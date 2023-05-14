"use strict";

const route = (event) => {
  event = event || window.event;
  event.preventDefault();
  window.history.pushState({}, "", event.target.href);
  handleLocation();
};

const routes = {
  "/": "/Web-bee-test-assignment/pages/activity.html",
  "/map": "/Web-bee-test-assignment/pages/map.html",
  "/time": "/Web-bee-test-assignment/pages/time.html",
};

const handleLocation = async () => {
  const path = window.location.pathname;
  console.log(`path: ${path}`);
  const html = await fetch(routes[path]).then((data) => data.text());
  document.getElementById("app").innerHTML = html;

  updateActiveButtons(path);
};

// Отслеживает back, go
window.addEventListener("popstate", handleLocation);

// Для начальной обработки
document.addEventListener("DOMContentLoaded", () => {
  handleLocation();
});
