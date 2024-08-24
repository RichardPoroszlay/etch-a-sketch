function changeFieldColor(field) {
    field.style.backgroundColor = "black";
}

for (let i = 0; i < 16; i++) {
    let row = document.createElement("div");
    for (let i = 0; i < 16; i++) {
        let div = document.createElement("div");
        div.classList.add("field");
        row.appendChild(div);
    }
    document.getElementById("container").appendChild(row);
}

const fields = document.querySelectorAll(".field");

fields.forEach((field) => {
    field.addEventListener("click", () => {
      changeFieldColor(field);
    });
});
