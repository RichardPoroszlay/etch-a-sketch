function changeFieldColor(field) {
    field.style.backgroundColor = "black";
}

function removeOldGrid(gridContainer) {
    gridContainer.innerHTML = "";
}

function changeGridSize(sizeValue) {    
    let gridContainer = document.getElementById("gridContainer");

    removeOldGrid(gridContainer);

    for (let i = 0; i < sizeValue; i++) {
        let row = document.createElement("div");
        for (let i = 0; i < sizeValue; i++) {
            let div = document.createElement("div");
            div.classList.add("field");
            row.appendChild(div);
        }
        gridContainer.appendChild(row);
    } 
}

const slider = document.getElementById("slider");
let sliderOutput = document.getElementById("sliderOutput");
sliderOutput.textContent = slider.value;

slider.addEventListener("input", (event) => {
    sliderOutput.textContent = event.target.value;
    changeGridSize(event.target.value);
});

const fields = document.querySelectorAll(".field");

fields.forEach((field) => {
    field.addEventListener("mouseover", () => {
      changeFieldColor(field);
    });
});
