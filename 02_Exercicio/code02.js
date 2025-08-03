/* Criamos uma variavel chamada 'PosOrNeg' que usaremos para verificar se o numero é Positivo ou Negativo*/
var PosOrNeg
/* Criamos também uma variavel chamada 'OddEven' que usaremos para verificar s eo numero é impar ou par */
var OddEven

/* Agora criamos a função 'Check' que sera chamado pelo button usando o metodo 'Onclick' para fazer as verificações*/
function check(){
/* Criamos a variavel 'Number' para receber o valor do usuario */
    var number = document.getElementById('inpNumber').value;
/* Usando If Else, verificamos se o numero é positivo ou negativo */
    if(number > 0){
        PosOrNeg = 'Positive'
    } else{
        PosOrNeg = 'Negative'
    }
/* Usando outra condição e um formula, verificamos se ao dividirmo por 2 ira sobra algum valor, caso sobre um valor o numero é Impar */
    if(number % 2 !== 0){
        OddEven = 'impar'
/* Se não houver resto, o numero é Par */
    }else{
        OddEven = 'Par'
    }
    const MultNum = {
        Number:number,PosNeg:PosOrNeg,OddEven:OddEven
    }
    const resp = `<p>Number: ${MultNum.Number}<p>
    <p>Positive or Negativa: ${PosOrNeg}<p>
    <p>Odd or Even: ${MultNum.OddEven}<p>
    ` 

    document.querySelector('h2').innerHTML =  resp;

}