function calculate(){
    const a = document.getElementById('numberOne').value; 
    const b = document.getElementById('numberTwo').value;
    let c
    if(a===b){
        c = a + b;
        document.querySelector('span').innerText = `The sum of ${a} more ${b} is ${c}`
    }else{
        c = a * b;
        document.querySelector('span').innerText = `The result of multiplication of ${a} for ${b} is:\n${c} `
    }
}