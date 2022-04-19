class Display {
    constructor(displayValorPrevio, displayValorActual){
        this.displayValorActual = displayValorActual;
        this.displayValorPrevio = displayValorPrevio;
        this.calculador = new Calculadora();
        this.tipo0peracion = undefined,
        this.valorActual = '';
        this.valorPrevio ='';
        this.signos = {
            sumar:'+',
            restar:'-',
            multiplicar:'x',
            dividir:'%'
        }
    }

    //funciones
    borrar(){
        this.valorActual = this.valorActual.toString().slice(0,-1);
        this.mostrarValores()
    }
    borrarTodo(){
        this.valorActual = '';
        this.valorPrevio = '';
        this.tipo0peracion= undefined;
        this.mostrarValores();
    }
    computar(tipo){
        this.tipo0peracion !== 'igual' && this.calcular();
        this.tipo0peracion = tipo;
        this.valorPrevio = this.valorActual || this.valorPrevio;
        this.valorActual = '';
        this.mostrarValores();
    }
    agregarNumero(numero){
        if(numero === '.' && this.valorActual.includes('.')) return 
        this.valorActual = this.valorActual.toString() + numero.toString();
        this.mostrarValores();
    }
    mostrarValores(){
        this.displayValorActual.textContent = this.valorActual;
        this.displayValorPrevio.textContent = `${this.valorPrevio} ${this.signos[this.tipo0peracion] || ''}`;
    }
    calcular(){
        const valorPrevio = parseFloat(this.valorPrevio);
        const valorActual = parseFloat(this.valorActual);

        if ( isNaN(valorActual) || isNaN(valorPrevio) ) return
        this.valorActual = this.calculador[this.tipo0peracion](valorPrevio, valorActual);
    }
}

//funciones