          //overlay

function on() {
  document.getElementById("overlay").style.display = "block";
}

function off() {
  document.getElementById("overlay").style.display = "none";
}

function copyon() {
  document.getElementById("copy-overlay").style.display = "block";
}

function copyoff() {
  document.getElementById("copy-overlay").style.display = "none";
}

          //overlay end



          //copy to clipboard


function copyElementText(id) {
    var text = document.getElementById(id).innerText;
    var elem = document.createElement("textarea");
    document.body.appendChild(elem);
    elem.value = text;
    elem.select();
    document.execCommand("copy");
    document.body.removeChild(elem);
}

            //copy end
