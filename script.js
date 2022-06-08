const body = document.body;
const container = document.querySelector('.container');
// large container for the 16 grids

// grids
for (let i = 1; i < 17; i++) {
    let hi = document.createElement('div');
    hi.textContent = `${i}`;
    hi.classList.add('divs');   
    hi.style.borderColor = 'gray';
    container.append(hi);
}