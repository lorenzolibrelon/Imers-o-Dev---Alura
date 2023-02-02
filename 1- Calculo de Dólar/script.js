function funcao1(){
    var cotacaoDolar = 5.32, valorEmReal;

    var valorEmDolar = prompt('Informe o Valor em Dólar a ser convertido:');
    
    valorEmReal = valorEmDolar*cotacaoDolar;
    valorEmReal=valorEmReal.toFixed(2);
    alert("R$ " + valorEmReal);
}
