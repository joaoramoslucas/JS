//  const apresentar = nome => `meu nome é ${nome}`;
//  const soma = (numero1, numero2) => numero1+numero2;

 // Arrow function com + de 1 linha de  instrução

 const numerosPequenos = (numero1, numero2) => {
    if (numero1 && numero2 > 10){
        return "Somente numeros de 1 a 9"
    } else {
        return numero1 + numero2
    }
 }
 console.log(numerosPequenos(9, 9))