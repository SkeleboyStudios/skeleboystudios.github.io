var homes = ["Home1.png", "Home2.png", "Home3.png"];
var abouts = ["AboutUs1.png", "AboutUs2.png", "AboutUs3.png"];
var projs = ["Projects1.png", "Projects2.png", "Projects3.png"];
var path = '/assets/img/';

document.addEventListener("DOMContentLoaded", function(event) {
  var home = document.getElementById('navHome');
  var proj = document.getElementById('navProj');
  var about = document.getElementById('navAbout');
  if (typeof(Worker) !== "undefined") {
    if (typeof(w) == "undefined") {
      w = new Worker("/assets/js/navWorker.js");
      var i = 0;
      w.postMessage("");
      w.onmessage = function(e) {
        i++;
        if (i >= homes.length) {
          i = 0;
        }
        home.setAttribute('src', path + homes[i]);
        proj.setAttribute('src', path + projs[i]);
        about.setAttribute('src', path + abouts[i]);
        w.postMessage("");
      }
    }
  }
});
