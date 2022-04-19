//variables botones
const displayValorPrevio = document.getElementById('valor-previo');
const displayValorActual = document.getElementById('valor-actual');
const botonesNumeros = document.querySelectorAll('.numero');
const botonesOperadores = document.querySelectorAll('.operador');
//variables botones

const display = new Display (displayValorActual, displayValorPrevio);

botonesNumeros.forEach(boton =>{
    boton.addEventListener('click', ()=> {
        display.agregarNumero(boton.innerHTML);
    });
});

botonesOperadores.forEach( boton =>{
    boton.addEventListener('click', ()=>{
        display.computar(boton.value)
    })
})
