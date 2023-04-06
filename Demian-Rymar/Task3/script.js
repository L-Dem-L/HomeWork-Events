let ball = document.getElementById("ball");
let field = document.getElementById("field");

field.addEventListener("click", function (event) {
    let x = event.clientX;
    let y = event.clientY;
    let fieldRect = field.getBoundingClientRect();
    let ballRect = ball.getBoundingClientRect();
    let ballX = x - ballRect.width / 2;
    let ballY = y - ballRect.height / 2;
    if (ballX < fieldRect.left) {
        ballX = fieldRect.left;
    }
    if (ballX + ballRect.width > fieldRect.right) {
        ballX = fieldRect.right - ballRect.width;
    }
    if (ballY < fieldRect.top) {
        ballY = fieldRect.top;
    }
    if (ballY + ballRect.height > fieldRect.bottom) {
        ballY = fieldRect.bottom - ballRect.height;
    }
    ball.style.transform = "translate(" + ballX + "px, " + ballY + "px)";
});