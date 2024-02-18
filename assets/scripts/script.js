const botao = document.getElementById("botao-calcular");
let altura = document.querySelector('.altura');
let peso = document.querySelector('.peso');
let imc = 0;

botao.addEventListener('click',()=>{
    let pesoValue = peso.value;
    let alturaValue = altura.value;
    var verificador = 0;

    if (alturaValue >=20 && alturaValue <= 250) {
        function setaSucessoAltura(altura){
            const divControle = altura.parentElement;
            divControle.className = 'div-controle-sucesso';
            const msgErro = divControle.querySelector('.msg-erro');
            msgErro.innerHTML = '';
            verificador = 1;
        }
        setaSucessoAltura(altura);

    } else {
        function setaErroAltura(altura){
            const msgResultado = document.querySelector('.msg-resultado');
            msgResultado.innerHTML = '';
            const divControle = altura.parentElement;
            divControle.className = 'div-controle-erro';
            const msgErro = divControle.querySelector('.msg-erro');
            msgErro.innerHTML = 'Altura inválida. Digite em centimetros (Exemplo: 180).';
        }
        setaErroAltura(altura);
    }
    if (pesoValue >= 5 && pesoValue <= 600) {
        function setaPesoSucesso(peso) {
            const divControle = peso.parentElement;
            divControle.className = 'div-controle-sucesso';
            const msgErro = divControle.querySelector('.msg-erro');
            msgErro.innerHTML = '';
            verificador += 1;

        }
        setaPesoSucesso(peso);
    } else {
        function setaErroPeso(peso){
            const msgResultado = document.querySelector('.msg-resultado');
            msgResultado.innerHTML = '';
            const divControle = peso.parentElement;
            divControle.className = 'div-controle-erro';
            const msgErro = divControle.querySelector('.msg-erro');
            msgErro.innerHTML = 'Peso inválido. Digite em quilos (Exemplo: 60).';
        }
        setaErroPeso(peso);
    }
    if (verificador === 2) {
        const resultado = document.querySelector('.msg-resultado');
        imc = pesoValue/((alturaValue/100)**2);
        const grau = (imc) => {
            if (imc < 16.9) {return 'muito abaixo do peso!'};
            if (imc >= 17 && imc <= 18.4) {return 'abaixo do peso!'};
            if (imc >=18.5 && imc <= 24.9) {return 'com o peso normal!'};
            if (imc >= 25 && imc <= 29.9) {return 'acima do peso!'};
            if (imc >= 30 && imc <= 34.9) {return 'com obesidade grau I!'};
            if (imc >= 35 && imc <= 40) {return 'com obesidade grau II!'};
            if (imc > 40) {return 'com obesidade grau III!'};
        };
        resultado.innerHTML = `Seu IMC é de ${imc.toFixed(2)}. Você está ${grau(imc)}`;
    }
}
);