var dir = '../images/'
var images = ["gif-01.gif", "gif-02.gif", "gif-03.gif", "gif-04.gif","gif-05.gif", "gif-06.gif""];
var count = images.length;
var random = Math.round(Math.random() * (count - 1));
document.getElementsByClassName("background-image").style.backgroundImage = "url(" + dir + images[randomCount] + ")";