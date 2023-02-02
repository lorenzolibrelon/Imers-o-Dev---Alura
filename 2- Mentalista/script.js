function funcao1(){
    var num = parseInt(Math.random()*1001), nchutes = 0;
    while (chute != num){
        var chute = prompt('Digite um número entre 0 e 1000');
        if (chute == num){
            alert('Acertou!');
        }
        else if (chute > num){
            alert('Errou... O Número é menor.');
        }
        else if (chute < num){
            alert('Errou... O Número é maior.');
        }
        nchutes++;
        alert('Chutes Feitos: ' + nchutes);
    }
    
}
