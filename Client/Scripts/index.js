// Pega itens e leva para outras paginas
function Pages(numPage) {
  switch (numPage) {
    case 1:
      window.location.href = 'pages/imc.html';
  }
}

//tema
var html = document.querySelector('html');
function ChangeColor() {
  html.classList.toggle('darkMode');
}

//botão home
function Home() {
  window.location.href = '../index.html';
}

//calcula IMC
function CalcIMC() {
  //pega valores
  var inputPeso = document.querySelector('#iptPeso').value;
  var inputAltura = document.querySelector('#iptAltura').value;
  //pega locais
  var result = document.querySelector('.result');
  var diagnostico = document.querySelector('.diagnosis');

  //ve se os imputs estão vazios
  if (inputPeso === '' || inputAltura === '') {
    result.innerHTML = 'Preencha os campos corretamente';
    diagnostico.innerHTML = '';
  } else {
    //imc calculado
    soma = inputPeso / inputAltura ** 2;
    //texto que aparece para o usuario
    text = `Seu resultado deu <span>${soma.toFixed(1)}</span>`;
    textDiagnostico = `Sua classicação é `;
    //mostra na tela
    result.innerHTML = text;
    if (soma <= 0) {
      diagnostico.innerHTML = 'IMC quebrou, confira os campos! 👆';
    } else if (soma < 18.5) {
      diagnostico.innerHTML =
        textDiagnostico + `<span>${'Abaixo do peso'}</span>`;
    } else if (soma < 24.9) {
      diagnostico.innerHTML = textDiagnostico + `<span>${'Peso Normal'}</span>`;
    } else if (soma < 29.9) {
      diagnostico.innerHTML = textDiagnostico + `<span>${'Sobrepeso'}</span>`;
    } else if (soma < 34.9) {
      diagnostico.innerHTML = textDiagnostico + `<span>${'Obesidade l'}</span>`;
    } else if (soma < 39.9) {
      diagnostico.innerHTML =
        textDiagnostico + `<span>${'Obesidade ll'}</span>`;
    } else if (soma > 40) {
      diagnostico.innerHTML =
        textDiagnostico + `<span>${'Obesidade lll'}</span>`;
    }
  }
}
