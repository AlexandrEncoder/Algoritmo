
/* Crio um ouvinte para o h1*/
let sumNumber = document.querySelector('h1');

/* Crio uma função que sera acionada ao clicar no botao usando a função ONCLICK*/
function Sum(){
/* Pego o primeiro valor e amarzeno em uma função*/
    firstNumber = parseFloat(document.getElementById('first').value);
/* Pego o secundo valor e amarzeno em uma função*/
    secondNumber = parseFloat(document.getElementById('second').value);
/* Pego o terceiro valor e amarzeno em uma função*/
    thirdNumber = parseFloat(document.getElementById('third').value);

/* Crio uma varial chada 'totalSum'  para somar todos os valores*/
    let totalSum = firstNumber + secondNumber + thirdNumber
/* Agora envio para o H1 o resultado da soma dos três valores */
    sumNumber.innerHTML=`The total of the value is ${totalSum}`
}