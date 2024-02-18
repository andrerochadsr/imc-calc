const botao = document.getElementById("botao-calcular");
let altura = document.querySelector('.altura');
let peso = document.querySelector('.peso');
let imc = 0

botao.addEventListener('click',()=>{
    let pesoValue = peso.value
    let alturaValue = altura.value

    if (alturaValue > 2.50) {
        function setaErroAltura(altura){
            const divControle = altura.parentElement;
            divControle.className = 'div-controle-erro';
            const msgErro = divControle.querySelector('.msg-erro')
            msgErro.innerHTML = 'Altura inválida.'
        }
        setaErroAltura(altura)


    } else if (pesoValue > 600){
        function setaErroPeso(peso){
            const divControle = peso.parentElement;
            divControle.className = 'div-controle-erro';
            const msgErro = divControle.querySelector('.msg-erro');
            msgErro.innerHTML = 'Peso inválido.'
        }
        setaErroPeso(peso)
        
    } else {
        function SetaSucesso(altura, peso) {
            const divControleAltura = altura.parentElement;
            const divControlePeso = peso.parentElement;
            divControleAltura.className = 'div-controle-sucesso';
            divControlePeso.className = 'div-controle-sucesso';
        }
        SetaSucesso(altura, peso)
        imc = (pesoValue/(alturaValue*alturaValue)).toFixed(2)
        document.querySelector('.msg-resultado').innerHTML = imc;   
    }
});