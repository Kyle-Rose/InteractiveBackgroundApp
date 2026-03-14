const redButton = document.getElementById("redButton");
const greenButton = document.getElementById("greenButton");
const blueButton = document.getElementById("blueButton");
const randomButton = document.getElementById("randomButton");

const colorDisplay = document.getElementById("colorDisplay");
const colorPicker = document.getElementById("colorPicker");

const saveColorButton = document.getElementById("saveColorButton");
const savedColorsList = document.getElementById("savedColorsList");

const colors = [
    "#FF0000",
    "#00FF00",
    "#0000FF",
    "#FFFF00",
    "#800080"
];

function setColor(color) {
    document.body.style.backgroundColor = color;
    colorDisplay.textContent = color;
}

colorPicker.addEventListener("input", function () {
    setColor(colorPicker.value);
});

redButton.addEventListener("click", function () {
    setColor("#FF0000");
});

greenButton.addEventListener("click", function () {
    setColor("#00FF00");
});

blueButton.addEventListener("click", function () {
    setColor("#0000FF");
});

randomButton.addEventListener("click", function () {
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    setColor(randomColor);
});

function createSavedColor(color) {
    const container = document.createElement("div");

    const colorButton = document.createElement("button");
    colorButton.textContent = color;
    colorButton.style.backgroundColor = color;

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.style.marginLeft = "10px";

    colorButton.addEventListener("click", function () {
        setColor(color);
    });

    deleteButton.addEventListener("click", function () {
        container.remove();
        updateLocalStorage();
    });

    container.appendChild(colorButton);
    container.appendChild(deleteButton);

    savedColorsList.appendChild(container);
}

saveColorButton.addEventListener("click", function () {
    const currentColor = colorDisplay.textContent;

    if (!currentColor) return;

    createSavedColor(currentColor);
    updateLocalStorage();
});

function updateLocalStorage() {
    const colors = Array.from(savedColorsList.children).map(
        item => item.firstChild.textContent
    );

    localStorage.setItem("savedColors", JSON.stringify(colors));
}

function loadSavedColors() {
    const savedColors = JSON.parse(localStorage.getItem("savedColors")) || [];

    savedColors.forEach(color => {
        createSavedColor(color);
    });
}

loadSavedColors();