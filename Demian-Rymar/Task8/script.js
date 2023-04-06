let box = document.getElementById("myBox");

function startResize(e) {
    e.preventDefault();
    box.style.position = "absolute";
    document.addEventListener("mousemove", resize);
    document.addEventListener("mouseup", stopResize);
}

function stopResize(e) {
    document.removeEventListener("mousemove", resize);
    box.style.position = "";
}

function resize(e) {
    box.style.width = e.pageX - box.offsetLeft + "px";
    box.style.height = e.pageY - box.offsetTop + "px";
}