function changeFieldColor(field) {
    field.style.backgroundColor = "black";
}

function removeOldGrid(grid) {
    grid.replaceChildren();
}

function changeGridSize(size) {    
    const gridContainer = document.getElementById("gridContainer");
    removeOldGrid(gridContainer);

    for (let rowIndex = 0; rowIndex < size; rowIndex++) {
        const row = document.createElement("div");
        row.classList.add("row");

        for (let colIndex = 0; colIndex < size; colIndex++) {
            const field = document.createElement("div");
            field.classList.add("field");
            
            field.addEventListener("click", () => changeFieldColor(field));
            
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

const slider = document.getElementById("slider");
let sliderOutput = document.getElementById("sliderOutput");

slider.addEventListener("input", () => {
    updateGridFromSlider(slider, sliderOutput);
});
