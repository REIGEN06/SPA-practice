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
  const path = window.location.pathname.replace("/Web-bee-test-assignment", "");
  const route = routes[path] || routes[404];
  const html = await fetch("/Web-bee-test-assignment" + route).then((data) =>
    data.text()
  );
  document.getElementById("app").innerHTML = html;
};
// Отслеживает изменение юрла (listener)
window.onpopstate = handleLocation;
window.route = route;

// Для начальной обработки
handleLocation();
