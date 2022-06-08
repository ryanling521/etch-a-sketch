// large container for the 16 grids
const body = document.body;
const container = document.querySelector('.container');

// function to remove children
function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}
function populate(size) {
    container.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    container.style.gridTemplateRows = `repeat(${size}, 1fr)`;

    for (let i = 1; i < size*size+1; i++) {
        let square = document.createElement('div');
        square.classList.add('divs');
        square.style.backgroundColor = 'white';
        square.style.borderColor = 'black';
        square.textContent = `${i}`;
        container.append(square);
    }
}

// take input from button
const btn = document.querySelector('#btn');
btn.addEventListener('click',function() {
    // remove previous elements
    removeAllChildNodes(container);

    // // make divs
    let numberofSquares = document.getElementById("squares").value;
    populate(numberofSquares);

    // select all divs 
    const divs = Array.from(document.querySelectorAll('.divs'));
    
    // add hovering effect to all divs
    divs.forEach(function(div) {
      div.addEventListener('mouseenter', e => e.target.style.backgroundColor = 'purple');
      div.addEventListener('mouseleave', e => e.target.style.backgroundColor = 'white');
    });
});





