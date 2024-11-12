var container = document.querySelector("#container");
container.style.width = "600px";
container.style.height = "600px";

var btn = document.querySelector("#btn");
container.style.border = "1px solid gray"

btn.addEventListener("click", () => {
    const getInput = parseInt(prompt("Select the size of each side (maximum of 100)."));
    if (Number.isInteger(getInput) && getInput > 0 && getInput <= 100) {
        clearContainer();
        createColumn(getInput);
        createRow(getInput);
    } else {
        alert("Invalid input.");
    }
})

function clearContainer() {
    container.innerHTML = "";
}

function createColumn(size) {
    for (let i = 0; i < size; i++) {
        let newCol = document.createElement("div");
        newCol.classList.add('column');
        newCol.style.display = "inline-block";
        newCol.style.width = 600 / size + "px";
        newCol.style.height = "100%";
        newCol.style.boxSizing = "border-box";
        container.appendChild(newCol);
    }
}

function createRow(size) {
    let columns = document.querySelectorAll(".column");
    columns.forEach(column => {
        for (let i = 0; i < size; i++) {
            let newRow = document.createElement('div');
            newRow.classList.add('row');
            newRow.style.height = `${600 / size}px`;
            newRow.style.boxSizing = "border-box";
            column.appendChild(newRow);
            newRow.addEventListener("mouseenter", () => {
                newRow.style.backgroundColor = "gray";
            });
            newRow.addEventListener("mouseleave", () => {
                newRow.style.backgroundColor = "";
            });
        }
    })
}

