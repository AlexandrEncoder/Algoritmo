function valueSalarys(){
    const minimumWage = Number(1293.20);
    const vSalary = document.getElementById('salary').value;
    let salaryQuantity = vSalary / minimumWage;
    let rest = salaryQuantity % minimumWage
    
    document.querySelector('span').innerText= `Number of minimum wages ${Math.trunc(salaryQuantity)}`
    if(salaryQuantity % minimumWage !=0){
        document.getElementById('rest').innerText=`Surplus R$${rest.toFixed(2)}`
    }
}