function verificar(){
    let firstValue = Number(document.getElementById('firstValue').value);
    let secondValue = Number(document.getElementById('secondValue').value);
    
    const firstCheck = Boolean(firstValue)
    const secondCheck = Boolean(secondValue)
    if(firstCheck == true && secondCheck == true){
        document.querySelector('h3').innerText = `The numbers ${firstValue}  and the ${secondValue} are boolean numbers.`;

    }else if(firstCheck == true && secondCheck == false){
        document.querySelector('h3').innerText = `The number ${firstValue} is a boolean number and the ${secondValue} is not a boolean number.`

    }else if(firstCheck == false && secondCheck == true){
        document.querySelector('h3').innerText = `The number ${firstValue} is not a boolean number and the ${secondValue} is a boolean number.`
   
    }else{
        document.querySelector('h3').innerText = `The numbers ${firstValue}  and the ${secondValue} are not boolean numbers.`;
    }
}