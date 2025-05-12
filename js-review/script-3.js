// fetch('https://jsonplaceholder.typicode.com/todos')
//   .then(data => data.json())
//   .then(data => console.log(data))

async function fetchProdutos(url) {
  const response = await fetch(url);
  const json = await response.json();
  console.log(response);
  console.log(json)
  return response;
}

fetchProdutos('https://jsonplaceholder.typicode.com/todos')