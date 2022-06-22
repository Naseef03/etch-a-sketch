const mainDiv = document.querySelector('#mainDiv');

for (let i = 0; i < 16; i++) {
  const rowDiv = document.createElement('div');
  rowDiv.classList.add('rowDiv');

  for (let j = 0; j < 16; j++) {
    const cellDiv = document.createElement('div');
    cellDiv.classList.add('cellDiv');
    rowDiv.appendChild(cellDiv);
  }

  mainDiv.appendChild(rowDiv);
}