function decreaseRGB(field, rIncrement, gIncrement, bIncrement) {
    // Get the current background color in RGB format
    const currentColor = window.getComputedStyle(field).backgroundColor;

    // Extract RGB components using a regex to get numbers
    const rgbValues = currentColor.match(/\d+/g).map(Number);
    let [r, g, b] = rgbValues;

    r = Math.max(0, r - rIncrement);
    g = Math.max(0, g - gIncrement); 
    b = Math.max(0, b - bIncrement); 

    field.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
}

function increaseRGB(field, rIncrement, gIncrement, bIncrement) {
    // Get the current background color in RGB format
    const currentColor = window.getComputedStyle(field).backgroundColor;

    // Extract RGB components using a regex to get numbers
    const rgbValues = currentColor.match(/\d+/g).map(Number);
    let [r, g, b] = rgbValues;

    // Add increments to each color component
    r = Math.min(r + rIncrement, 255); // Ensure value does not exceed 255
    g = Math.min(g + gIncrement, 255); // Ensure value does not exceed 255
    b = Math.min(b + bIncrement, 255); // Ensure value does not exceed 255

    // Set the new RGB color
    field.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
}

function changeFieldColor(field) {
    if (eraserButton.classList.contains("active")) {
        field.style.backgroundColor = "rgba(255, 255, 255, 1)";
    }
    else if(rainbowButton.classList.contains("active")) {
        field.style.backgroundColor = "#"+(Math.random()*0xFFFFFF<<0).toString(16);
    }
    else if(shadingButton.classList.contains("active")) {
        decreaseRGB(field, 20, 20, 20);
    }
    else if(lightingButton.classList.contains("active")) {
        increaseRGB(field, 20, 20, 20)
    }
    else {
        field.style.backgroundColor = "rgba(0, 0, 255, 1)";
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

const callToActionBtns = document.querySelectorAll(".triggerable");

callToActionBtns.forEach((btn) => {
    btn.addEventListener("click", (e) => {
        callToActionBtns.forEach(otherBtn => otherBtn != e.target ? otherBtn.classList.remove("active") : "");
            e.target.classList.toggle("active");
    });
});
