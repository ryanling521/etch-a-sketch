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

const divs = Array.from(document.querySelectorAll('.divs'));

// function removeBackground(e) {
//     e.target.style.backgroundColor = "purple";
//     if (!e.target) {
//         e.target.style.backgroundColor = "white";
//     }
//   }

// divs.forEach(div => div.addEventListener('mouseover', e => e.target.style.backgroundColor = "purple"));
divs.forEach(function(div) {
  div.addEventListener('mouseenter', e => e.target.style.backgroundColor = 'purple');
  div.addEventListener('mouseleave', e => e.target.style.backgroundColor = 'white');
});
