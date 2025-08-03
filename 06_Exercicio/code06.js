function calculate(){
    let value = Number(document.getElementById('number').value);
    const addition = value + (value * 0.05);
    document.querySelector('h3').innerText = `After a 5% adjustment, the value of ${value} will be ${addition}`
}