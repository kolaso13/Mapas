import L from 'leaflet';

var map = L.map('map').setView([43.34578351332376, -1.7965434243182008],11);
document.getElementById("Miubicacion").addEventListener("click",function(){
if("geolocation" in navigator){
    navigator.geolocation.getCurrentPosition(function(position) {
        map.setView([position.coords.latitude, position.coords.longitude],14);
      });
}})

L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://cloudmade.com">CloudMade</a>',maxZoom: 18}).addTo(map);

var Irun = L.marker([43.337980156287806, -1.7889131039719477]).addTo(map);
Irun.bindPopup("<b>Irun</b><br>Ofertas Irun").openPopup();

var Hondarribi = L.marker([43.370869413041085, -1.8000573608023607]).addTo(map);
Hondarribi.bindPopup("<b>Hondarribi</b><br>Ofertas Hondarribi").openPopup();

var Errenteria = L.marker([43.31310137742069, -1.9011304116311554]).addTo(map);
Errenteria.bindPopup("<b>Errenteria</b><br>Ofertas Errenteria").openPopup();

var Donostia = L.marker([43.318295831830575, -1.9809033453194742]).addTo(map);
Donostia.bindPopup("<b>Donostia</b><br>Ofertas Donostia").openPopup();

Irun.addEventListener("click",function(){filtrar(1);});

Errenteria.addEventListener("click",function(){filtrar(2);});

Hondarribi.addEventListener("click",function(){filtrar(3);});

Donostia.addEventListener("click",function(){filtrar(4);});