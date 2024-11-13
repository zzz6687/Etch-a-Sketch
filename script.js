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
    const colors = ['#FF0000', '#FF4500', '#FF8C00', '#FFD700', '#FFFFE0', '#7CFC00', '#00BFFF', '#9400D3', '#FFFFFF'];
    let columns = document.querySelectorAll(".column");
    columns.forEach(column => {
        for (let i = 0; i < size; i++) {
            let newRow = document.createElement('div');
            newRow.classList.add('row');
            newRow.style.height = `${600 / size}px`;
            newRow.style.boxSizing = "border-box";
            newRow.setAttribute("data-color-index", 0); 
            column.appendChild(newRow);

            newRow.addEventListener("mouseenter", () => {
                let currIndex = parseInt(newRow.getAttribute('data-color-index'));
                if (currIndex < colors.length) {
                    newRow.style.backgroundColor = colors[currIndex];
                    newRow.setAttribute('data-color-index', currIndex + 1);
                }
            });
        }
    })
}

function randomColor() {
    var color = '#';
    var letters = ['#FF0000', '#FF4500', '#FF8C00', '#FFD700', '#FFFFE0', '#7CFC00', '#00BFFF', '#9400D3', '#FFFFFF'];
}