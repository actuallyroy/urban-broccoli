import Mustache from "https://cdnjs.cloudflare.com/ajax/libs/mustache.js/4.2.0/mustache.js";

const urlParams = new URLSearchParams(window.location.search);


const data = {
  description: urlParams.get("desc") || "",
  title: urlParams.get("title") || "",
  lonNlat: () => {
    let lon = urlParams.get("lon"),
    lat = urlParams.get("lat")
    if (lon && lat) {
      return lon + "°N / " + lat + "°E"
    } else {
      return ""
    }
  },
  date: urlParams.get("date") || "",
};



function render() {
  var template = document.getElementById("target").innerHTML
  var rendered = Mustache.render(template, data);
  document.getElementById("target").innerHTML = rendered;
}

render();