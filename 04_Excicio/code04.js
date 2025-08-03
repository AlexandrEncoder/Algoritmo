document.querySelector('form').addEventListener('submit', (e)=>{
    e.preventDefault(); 
    aNumber = Number(document.getElementById('newNumber').value);
    successor = aNumber + 1;
    predecessor = aNumber - 1;

    document.querySelector('h2').innerText = `The successor the ${aNumber} is ${successor}\nThe predecessor the ${aNumber} is ${predecessor}`
})