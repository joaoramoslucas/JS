// let x = ''
// console.log(x)
// x = 'oi';

// DECLARAÇÃO DE FUNÇÃO

// 1) declarar a função
                    //string
function imprimeTexto (texto) {
    console.log(texto)
}

// 2) executa a função (1 ou + vezes)

imprimeTexto(soma());
// imprimeTexto("outro nome");

// três formas de escrever funções

function soma(matematica){
    
    // outros codigos, return usado sempre no final da função
    return 2 + 2;
}

// console.log(soma())

function matematica(arredondamento){
    const primeiroNumero = 1.5;
       const resultado = Math.round(primeiroNumero)
       console.log(resultado)
       console.log(arredondamento)
}

matematica(soma());
