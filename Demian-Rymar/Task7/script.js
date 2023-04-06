let folders = document.getElementsByClassName("folder");

for (let i = 0; i < folders.length; i++) {
    folders[i].addEventListener("click", function() {
        this.classList.toggle("open");
        let files = this.nextElementSibling;
        if (files.style.display === "block") {
            files.style.display = "none";
        } else {
            files.style.display = "block";
        }
    });
}
