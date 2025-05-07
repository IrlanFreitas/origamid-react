// Tudo é objeto pois toda variavel tem um propridade que pode ser acessado por ponto (.)

const menu = {
  selector: '.principal'
}

console.log(menu.selector)
console.log(menu.selector.toLocaleUpperCase())


function upperName(name) {
  return name.toLocaleUpperCase()
}
// arrow function
const lowerName = (name) => {
  return name.toLocaleLowerCase()
}

console.log(upperName('Irlan'));
console.log(lowerName('Irlan'));

function handleMouse(event) {
  // Desestruturação
  const { clientX, clientY } = event
  // Interpolação de String
  console.log(`X: ${clientX}  Y:${clientY}`);
}

const frutas = ['banana', 'uva'];
// Desestruturação de Arrays como acontece nos Hooks
const [fruta1, fruta2] = frutas;

const useQuadrado = [4, function (lado) { return 4 * lado }]

const [lados, perimetro] = useQuadrado;

console.log(lados);
console.log(perimetro(10));

// Evento
document.addEventListener('click', handleMouse)

// Rest e Spread

// Rest para aceitar muitos parametros de forma indefinida
function showList(empresa, ...clientes) {
  clientes.forEach(cliente => {
    console.log(cliente, empresa);
  })
}

showList('Google', 'Irlan', 'Paulo', 'Lucas');

const numeros = [21, 43, 54, 324, 43]

const maior = Math.max(110, 23, 42343, 544);
const maiorNumeros = Math.max(numeros); // não funciona pois é necessário espalhar os parametros
const maiorNumeros2 = Math.max(...numeros);
console.log(maiorNumeros);
console.log(maiorNumeros2);
console.log(maior);
