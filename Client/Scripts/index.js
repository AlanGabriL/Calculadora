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
