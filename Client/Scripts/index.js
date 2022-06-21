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
  var inputIdade = document.querySelector('#iptIdade');
  var inputAltura = document.querySelector('#iptAltura');
  console.log(inputIdade.value);
  console.log(inputAltura.value);
}
