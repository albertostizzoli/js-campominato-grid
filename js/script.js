// creo una variabile e un evento per il bottone
const btn = document.querySelector('button');

btn.addEventListener('click', function(){
    const numSquare = 100;
    const grid = document.getElementById('grid');
    grid.innerHTML = '';
    for(let i = 0; i < numSquare; i++){
        console.log(square);
        grid.append(square);
    }
});


