function InitializeMap() {
  var map = L.map('map-div').setView([28.272, -16.642], 10);
  L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
  }).addTo(map);

  L.marker([28.272, -16.642]).addTo(map).bindPopup("<b>VV1</b><br>Texto por defecto");
  L.marker([28.372, -16.442]).addTo(map).bindPopup("<b>VV2</b><br>Texto por defecto");

}

window.onload = function() {
  InitializeMap();
}