const button = document.getElementById("myButton");

colors = ["red", "green", "blue", "yellow", "purple"];

button.addEventListener("click", function() {
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    document.body.style.backgroundColor = randomColor;
});