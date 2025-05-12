const precos = [
  'Crédito',
  'R$ 200',
  'R$ 400',
  'Contas Pagar',
  'R$ 300',
  'R$ 400',
  'Meus dados',
];

const precosFiltro = precos.filter(preco => preco.includes("R$"))
const precosNumeros = precosFiltro.map(preco => Number(preco.split(" ")[1]))

console.log(precosFiltro)
console.log(precosNumeros)