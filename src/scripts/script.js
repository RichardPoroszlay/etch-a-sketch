function changeFieldColor(field) {
    if (eraserButton.classList.contains("active")) {
        field.style.backgroundColor = "white"
    } else {
        field.style.backgroundColor = "blue";
    }
}

function removeOldGrid(grid) {
    grid.replaceChildren();
}

function changeGridSize(size) {    
    const gridContainer = document.getElementById("gridContainer");
    removeOldGrid(gridContainer);

    let isMouseDown = false;

    document.addEventListener("mousedown", () => isMouseDown = true);
    document.addEventListener("mouseup", () => isMouseDown = false);

    for (let rowIndex = 0; rowIndex < size; rowIndex++) {
        const row = document.createElement("div");
        row.classList.add("row");

        for (let colIndex = 0; colIndex < size; colIndex++) {
            const field = document.createElement("div");
            field.classList.add("field");

            field.addEventListener("mouseover", () => {
                if (isMouseDown) {
                    changeFieldColor(field);
                }
            });

            field.addEventListener("mousedown", () => {
                changeFieldColor(field);
            });

            row.appendChild(field);
        }

        gridContainer.appendChild(row);
    }
}

function updateGridFromSlider(slider, outputElement) {
    const size = slider.value;
    outputElement.textContent = size;
    changeGridSize(size); 
}

function clearGrid() {
    let fields = document.querySelectorAll(".field");
    
    fields.forEach((field) => {
        field.style.backgroundColor = "white";
    });
}

const slider = document.getElementById("slider");
let sliderOutput = document.getElementById("sliderOutput");

slider.addEventListener("input", () => {
    updateGridFromSlider(slider, sliderOutput);
});

const clearButton = document.getElementById("clearButton");

clearButton.addEventListener("click", clearGrid);

const eraserButton = document.getElementById("eraserButton")

eraserButton.addEventListener("click", () => {
    eraserButton.classList.toggle("active");
});
