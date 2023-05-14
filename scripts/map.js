const center = [56.7416814609449, 37.225960833125036];

function init() {
  const map = new ymaps.Map("map", {
    center: center,
    zoom: 16,
  });

  const placemark = new ymaps.Placemark(
    center,
    {
      balloonContentBody: "Живу в общаге...",
      balloonContentFooter: "зато рядом с уником",
    },
    {
      iconLayout: "default#image",
      iconImageHref: `https://www.pngall.com/wp-content/uploads/10/Map-Marker-PNG-HD-Image.png`,
      iconImageSize: [20, 30],
      iconImageOffset: [-18, -20],
    }
  );
  map.geoObjects.add(placemark);
  //Получение первого экземпляра коллекции слоев, и первого слоя коллекции
  let layer = map.layers.get(0).get(0);
  //Отслеживание события окончания отрисовки тайлов
  waitForTilesLoad(layer).then(function () {
    document.querySelector(".preloader").classList.add("preloader-remove");
    document.querySelector(".map").classList.add("map-show");
  });
}

//Подождать все тайлы
function waitForTilesLoad(layer) {
  return new ymaps.vow.Promise(function (resolve, reject) {
    let tc = getTileContainer(layer),
      readyAll = true;
    tc.tiles.each(function (tile, number) {
      if (!tile.isReady()) {
        readyAll = false;
      }
    });
    if (readyAll) {
      resolve();
    } else {
      tc.events.once("ready", function () {
        resolve();
      });
    }
  });
}

function getTileContainer(layer) {
  for (let k in layer) {
    if (layer.hasOwnProperty(k)) {
      if (
        layer[k] instanceof ymaps.layer.tileContainer.CanvasContainer ||
        layer[k] instanceof ymaps.layer.tileContainer.DomContainer
      ) {
        return layer[k];
      }
    }
  }
  return null;
}
