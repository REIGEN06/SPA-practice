"use strict";

// Отслеживает юрл
const route = (event) => {
  event = event || window.event;
  //отмена действия браузера по умолчанию
  event.preventDefault();
  // добавляет запись в стек истории сеансов
  window.history.pushState({}, "", event.target.href);
  handleLocation();
};

const routes = {
  "/": "/pages/activity.html",
  "/map": "/pages/map.html",
  "/time": "/pages/time.html",
};

const handleLocation = async () => {
  const path = window.location.pathname;
  const route = routes[path] || routes[404];
  const html = await fetch(route).then((data) => data.text());
  console.log(path);
  console.log(route);
  console.log(html);
  document.getElementById("app").innerHTML = html;
};
// Отслеживает изменение юрла (listener)
window.onpopstate = handleLocation;
window.route = route;

// Для начальной обработки
handleLocation();
