var classArray = [
  "aboutus",
  "theme",
  "events",
  "proshows",
  "shield",
  "syahi",
  "rules",
  "parvaah",
  "sponsors",
  "reachus"
];

var url = "assets/images/2019/homepage/";
var imgChange = document.getElementsByClassName("homepage__imgChange")[0];

classArray.forEach(name => {
  var elem = document.getElementsByClassName(name)[0];
  
  elem.addEventListener("mouseover", () => {
    var tempurl = url + name + ".png";
    imgChange.style.opacity = 0;
    setTimeout(() => {
      imgChange.src = tempurl;
      setTimeout(() => {
        imgChange.style.opacity = 1;
      }, 250);
    }, 250);
  });

  elem.addEventListener("mouseout", () => {
    imgChange.style.opacity = 0;
    setTimeout(() => {
      imgChange.src = "assets/images/2019/Updated symphony logo withtheme.svg";
      setTimeout(() => {
        imgChange.style.opacity = 1;
      }, 250);
    }, 250);
  })
});
