const sliderSize = document.getElementById('sliderSize');
let color = "black";

function makeGrid(size) {
    const grid = document.querySelector('#grid');
    let boxes = grid.querySelectorAll('div');
    boxes.forEach((div) => div.remove());
    grid.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    grid.style.gridTemplateRows = `repeat(${size}, 1fr)`;
    sliderSize.textContent = `${size} x ${size}`

    const total = size * size;
    for (let i = 0; i < total; i++) {
        const box = document.createElement('div');
        box.addEventListener('mouseover', colorBox)
        box.style.backgroundColor = 'white';
        box.style.border = '.25vh solid #D3D3D3';
        grid.insertAdjacentElement('beforeend', box)
    }
}

function colorBox() {
    this.style.backgroundColor = color;
    if (color === "random") {
        this.style.backgroundColor = `hsl(${Math.random() *360}, 100%, 50%)`
    }
    else {
        this.style.backgroundColor = color
    }
}

function colorChange(choice) {
    color = choice;
}


function clearGrid(){
    const grid = document.querySelector('#grid');
    let boxes = grid.querySelectorAll('div');
    boxes.forEach((div) => (div.style.backgroundColor = 'white'))
}

makeGrid(32)