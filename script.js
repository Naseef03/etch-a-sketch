const FFFFFF_TO_DECIMAL = 16777215;


const mainDiv = document.querySelector('#mainDiv');

function gridMaker(n) { 
  for (let i = 0; i < n; i++) {
    const rowDiv = document.createElement('div');
    rowDiv.classList.add('rowDiv');

    for (let j = 0; j < n; j++) {
      const cellDiv = document.createElement('div');
      cellDiv.classList.add('cellDiv');
      rowDiv.appendChild(cellDiv);
    }

    mainDiv.appendChild(rowDiv);
  }

  const cellDivs = document.querySelectorAll('.cellDiv');
  cellDivs.forEach(cellDiv => cellDiv.addEventListener('mouseover', paint));
}  

gridMaker(16);

function randNum() {
  return Math.floor((Math.random() * FFFFFF_TO_DECIMAL));
}

function paint(e) {
  const currColor = e.target.style.backgroundColor;
  if (currColor != '') {
    const list_currColor = currColor.split(' ');
    let opacity = list_currColor.pop();
    opacity = +opacity.substring(0, opacity.length-1);
    opacity += 0.1;
    list_currColor.push(opacity + ')');
    e.target.style.backgroundColor = list_currColor.join('');

  }
  else {
    e.target.style.backgroundColor = `#${randNum()}`;
  }
}


function reset() {
  let value = input.value;
  value = !Number.isInteger(input.value) || input.value > 100 ? 16 : value;
  console.log(value)
  mainDiv.innerHTML = '';
  gridMaker(value);
}

const input = document.querySelector('input');
const button = document.querySelector('button');
button.addEventListener('click', reset);