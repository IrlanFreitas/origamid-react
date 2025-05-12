const grupoA = 100;
const grupoB = 200;

// Não é uma expressão
if(grupoA > grupoB) console.log("grupo a ganhou");
if(grupoB > grupoA) console.log("grupo b ganhou");

// Expressão
const vencedor = grupoA > grupoB ? "grupo a ganhou" : "grupo b ganhou"