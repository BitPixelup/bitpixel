var i = 0;
var txt = 'Welcome!'; /* The text */
var speed = 80; /* The speed/duration of the effect in milliseconds */
document.getElementById("ti").innerHTML = ""
function typeWriter() {
  if (i < txt.length) {

    document.getElementById("ti").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}
typeWriter()