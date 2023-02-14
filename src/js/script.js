let btn = document.querySelector('#btn');


 btn.addEventListener('click', function calcImc(event){
    event.preventDefault;
    let peso = document.querySelector('#peso').value;
    let altura = document.querySelector('#altura').value;
    var result = document.querySelector('#result')



result = Math.round(peso / (altura * altura));

if(result < 25){
    alert('Seu imc está normal');
}else {
    alert('Seu imc está alto');
}

document.getElementById('result').innerHTML = result;

result = result;

})
