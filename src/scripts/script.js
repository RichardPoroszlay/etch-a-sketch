for (let i = 0; i < 16; i++) {
    let row = document.createElement("div");
    for (let i = 0; i < 16; i++) {
        let div = document.createElement("div");
        div.classList.add("field");
        row.appendChild(div);
    }
    document.getElementById("container").appendChild(row);
}
  