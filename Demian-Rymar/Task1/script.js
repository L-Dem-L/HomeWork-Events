function validateInput() {
    let input = document.getElementById("username").value;
    let output = "";
    for (let i = 0; i < input.length; i++) {
        if (isNaN(input[i])) {
            output += input[i];
        }
    }
    document.getElementById("username").value = output;
}