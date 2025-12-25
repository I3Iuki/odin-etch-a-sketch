// global variables

const board = document.getElementById("board");
const black = document.getElementById("black");
const rainbow = document.getElementById("rainbow");
const eraser = document.getElementById("eraser");
const custom = document.getElementById("custom");
const customWrapper = document.getElementById("custom-wrapper");
const sizeSlider = document.getElementById("size");
const currentSize = document.getElementById("current-size");
const resetSize = document.getElementById("reset-size");

let currentColor;


// start

populateGrid(16);
custom.value = "#000000";
currentColor = custom.value;

// functions

function populateGrid(size = sizeSlider) {
    
    
    const amount = size * size
    let html = "";
    
    board.style.gridTemplateRows = `repeat(${size}, 1fr)`;
    board.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    
    for(let i = 0; i < amount; i++) {
        html += 
        `
        <div class="grid-item"></div>
        `
    }
    
    board.innerHTML = html;
    
    const gridItems = board.querySelectorAll("div");

    gridItems.forEach(item => {
        item.addEventListener("mouseover", () => {
            if (currentColor === "random") {
                const color1 = Math.floor(Math.random() * 256);
                const color2 = Math.floor(Math.random() * 256);
                const color3 = Math.floor(Math.random() * 256);
                
                item.style.backgroundColor = `rgb(${color1}, ${color2}, ${color3})`;

            } else {
                item.style.backgroundColor = currentColor;
            }
        })
    })
    
}

black.addEventListener("click", () => {
    custom.value = "#000000"
    currentColor = custom.value;
    customWrapper.classList.remove("rainbow-custom")
});

rainbow.addEventListener("click", () => {
    currentColor = "random";
    customWrapper.classList.add("rainbow-custom")
});

eraser.addEventListener("click", () => {
    custom.value = "#f5f5f5"
    currentColor = custom.value;
    customWrapper.classList.remove("rainbow-custom");
});

custom.addEventListener("change", () => {
    currentColor = custom.value;
    customWrapper.classList.remove("rainbow-custom");
});

sizeSlider.addEventListener("input", (e) => {
    populateGrid(sizeSlider.value);
    currentSize.textContent = `Current size: ${size.value}`
});

resetSize.addEventListener("click", (e) => {
    sizeSlider.value = 16;
    populateGrid(sizeSlider.value);
    currentSize.textContent = `Current size: ${size.value}`
}); 

