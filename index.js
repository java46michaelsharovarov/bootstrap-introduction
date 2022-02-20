const root = document.getElementById("root");
const length = 8;
root.innerHTML = chessBoard(length).join('');

function chessBoard(length){           
    const matrix = [];  
    matrix.push(`<div class="row g-0 justify-content-center">
    <div class="col-1 letters numbers border-top border-start border-dark border-3"></div>${lettersRow(length, 'border-top').join('')}
    <div class="col-1 letters numbers border-top border-end border-dark border-3"></div></div>`);
    for (let i = 0; i < length; i++) {
        matrix.push(`<div class="row g-0 justify-content-center">
        <div class="col-1 border-start border-dark border-3 fields numbers">${length - i}</div>
        ${matrixRow(length, i).join('')}<div class="col-1 border-end border-dark border-3 fields numbers">${length - i}</div></div>`);          
    }
    matrix.push(`<div class="row g-0 justify-content-center">
    <div class="col-1 letters numbers border-bottom border-start border-dark border-3"></div>${lettersRow(length, 'border-bottom').join('')}
    <div class="col-1 letters numbers border-bottom border-end border-dark border-3"></div></div>`);
    return matrix;
}
function matrixRow(length, i) {
    const row = [];  
    for (let j = 0; j < length; j++) {                  
        row.push((i % 2) - (j % 2) == 0 ? `<div class="col-1 border border-dark bg-dark fields"></div>` 
        : `<div class="col-1 border border-dark fields"></div>`);             
    }
    return row;
}
function lettersRow(length, border) {
    const row = [];  
    for (let j = 0; j < length; j++) {                  
        row.push(`<div class="col-1 ${border} border-dark border-3 fields letters">${String.fromCharCode(65 + j)}</div>`);             
    }
    return row;
}