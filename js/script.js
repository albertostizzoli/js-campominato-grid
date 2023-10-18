// creo una variabile  per il bottone
const btn = document.querySelector('button');

btn.addEventListener('click', function(){
    const numSquare = 100;
    const grid = document.getElementById('grid');
    grid.innerHTML = '';
    for(let i = 0; i < numSquare; i++){
        let square = drawSquare(i, numSquare);
        console.log(square);
        grid.append(square);
    }
});

// Creo una funzione che disegni i quadratini
 function drawSquare(squareIndex,numSquare){
    const squareWidth = Math.sqrt(numSquare);
    const square = document.createElement('div');
    square.classList.add('square');
    square.style.width = `calc(100% / ${squareWidth})`;
    square.style.width = square.style.width;
    square.innerHTML = squareIndex + 1;
    square.addEventListener('click', function(){
        square.classList.add('active');
        square.style.color = 'black';

    });
      return square;
 }


