# Router

Para os estudos sobre roteamento com react vamos utilizar a lib chamada [React Router](https://reactrouter.com/home).

É uma extensão qeu permite gerenciarmos as rotas do React.

```shell
  npm install react-router-dom
```

## BrowserRouter, Routes e Route

O `BrowserRouter` deve ser o componente pai que envolve tudo que depender do react-router.
O `Routes` define a área em que vamos colocar os nossos `Route`. O `Route` recebe um caminho em `path`,
se esse caminho for o mesmo do URL ele irá renderizar o componente que estiver dentro do `element={}`.

```javascript
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Contato from "./Contato";
import Sobre from "./Sobre";
import Home from "./Home";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="sobre" element={<Sobre />} />
        <Route path="contato" element={<Contato />} />
      </Routes>
    </BrowserRouter>
  );
};
```

## 404 - Não Encontrado

O `*` renderiza um elemento para todas as rotas que não foram definidas em path.
Uso ideal para mostrarmos um componente indicando que a página não existe.

```javascript
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Sobre from "./Sobre";
import Pagina404 from "./Pagina404";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="sobre" element={<Sobre />} />
        <Route path="*" element={<Pagina404 />} />
      </Routes>
    </BrowserRouter>
  );
};
```

## Link

O `Link` irá modificar a rota e renderizar o novo componente sem recarregar a página.

Mesmo sem recarregar a página o histórico do browser é modificado.

```js
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav>
      <Link to="/"> Home</Link> |<Link to="sobre">Sobre</Link> |
      <Link to="contato">Contato</Link>
    </nav>
  );
};
```

## NavLink

Funciona da mesma forma que o Link.

- Serve para fazer o enderaçamento das rotas
- Não recarregar a página
- Altera o histórico do navegador
- Tem o adicional de passar a informação de qual rota está ativa

Uma questão importante de ressaltar é que no caso da rota home, `/`
e ela está presente em todas as outras rotas como: `/sobre`, `/contato`
é necessário especificar na tag que está definindo o home que ali é
o caminho final, com o end

```html
<NavLink to="/" end>
  Home
</NavLink>
```

```js
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <nav>
      <NavLink to="/" end>
        Home
      </NavLink>{" "} | {" "}
      <NavLink to="sobre">Sobre</NavLink> {" "} | {" "}
      <NavLink to="contato">Contato</NavLink>
    </nav>
  );
};
```

## useNavigate

o hook `useNavigate` permite navegarmos programaticamente entre as rotas.

Por exemplo, pode ser utilizado quando o usuário faz um login bem sucedido e enviamos o mesmo
a página da sua conta.

```js
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  function handleClick() {
    console.log("Faz o login");
    navigate("/sobre");
  }

  return (
    <div>
      <button onClick={handleClick}>Login</button>
    </div>
  );
};
```

## Rota Dinâmica

O uso do `:nome` irá definir uma rota dinâmica, onde o `nome` poderá ser utilizado como uma variável dentro do componente.
Serve para buscarmos rotas dinâmicas como `produto/notebok` ou `produto/smartphone`.

```js
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Produto from "./Produto";
import Home from "./Home";
import Header from "./Header";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="produto/:id" element={<Produto />} />
      </Routes>
    </BrowserRouter>
  );
};
```

## useParams

O hook `useParams` terá um objeto com todos os parâmetros da rota.
É possível ter mais de um parâmetro.

```js
import { useParams } from "react-router-dom";

const Produto = () => {
  const params = useParams();

  return (
    <div>
      <h1>Produto</h1>
      <p>id: {params.id}</p>
    </div>
  );
};
```

## useLocation

Retorna o objeto location, com diversas informações sobre a rota atual,
como o caminho, parâmetros de busca e mais.

```js
import { useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation();

  React.useEffect(() => {
    const search = new URLSearchParams(location.search);
    console.log(search.get("q"));
    console.log("Toda vez que a rota mudar");
  }, [location]);

  return <div></div>;
};
```

| Existe também o const [searchParams, setSearchParams] = useSearchParams()

## Nested Routes - Rotas Aninhadas

Utilizamo nested routes quando precisamos de rotas dentro de rotas.
Como por exemplo:

`perfil/editar` e `perfil/certificados` e etc. Utilize o `\*` para definir que existem outros rotas dentro.

**App.js**

```js
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Sobre from "./Sobre";
import Login from "./Login";
import Produto from "./Produto";
import Header from "./Header";
import NaoEncontrada from "./NaoEncontrada";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="sobre" element={<Sobre />} />
        <Route path="login" element={<Login />} />
        <Route path="produto/:id/*" element={<Produto />} />
        <Route path="*" element={<NaoEncontrada />} />
      </Routes>
    </BrowserRouter>
  );
};
```

**Produto.js**

```js
import { useParams, Route, Routes, NavLink } from "react-router-dom";
import ProdutoDescricao from "./ProdutoDescricao";
import ProdutoAvaliacao from "./ProdutoAvaliacao";
import ProdutoCustomizado from "./ProdutoCustomizado";

const Produto = () => {
  const params = useParams();

  return (
    <div>
      <h1>Produto: {params.id}</h1>
      <nav>
        <NavLink to="">Descrição</NavLink>
        <NavLink to="avaliacao">Avaliação</NavLink>
        <NavLink to="customizado">Customizado</NavLink>
      </nav>
      <Routes>
        <Route path="/" element={<ProdutoDescricao />} />
        <Route path="avaliacao" element={<ProdutoAvaliacao />} />
        <Route path="customizado" element={<ProdutoCustomizado />} />
      </Routes>
    </div>
  );
};
```

## Outlet

Outra forma é definindo todas as rotas diretamente no App e
utilizar o component `Outlet` para mostrarmos a rota.

**App.js**

```js
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Sobre from "./Sobre";
import Login from "./Login";
import Produto from "./Produto";
import Header from "./Header";
import NaoEncontrada from "./NaoEncontrada";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="sobre" element={<Sobre />} />
        <Route path="login" element={<Login />} />
        <Route path="produto/:id/*" element={<Produto />} />
        <Route path="*" element={<NaoEncontrada />} />
      </Routes>
    </BrowserRouter>
  );
};
```

**Produto.js**

```js
import { useParams, Route, Routes, NavLink } from "react-router-dom";
import ProdutoDescricao from "./ProdutoDescricao";
import ProdutoAvaliacao from "./ProdutoAvaliacao";
import ProdutoCustomizado from "./ProdutoCustomizado";

const Produto = () => {
  const params = useParams();

  return (
    <div>
      <h1>Produto: {params.id}</h1>
      <nav>
        <NavLink to="">Descrição</NavLink>
        <NavLink to="avaliacao">Avaliação</NavLink>
        <NavLink to="customizado">Customizado</NavLink>
      </nav>
      <Routes>
        <Route path="/" element={<ProdutoDescricao />} />
        <Route path="avaliacao" element={<ProdutoAvaliacao />} />
        <Route path="customizado" element={<ProdutoCustomizado />} />
      </Routes>
    </div>
  );
};
```

**Produto.js**

Utilizando o Outlet para renderizar nested routes que foram criadas
na raiz do projeto.

```js
const Produto = () => {
  const params = useParams();

  return (
    <div>
      <h1>Produto: {params.id}</h1>
      <nav>
        <NavLink to="">Descrição</NavLink>
        <NavLink to="avaliacao">Avaliação</NavLink>
        <NavLink to="customizado">Customizado</NavLink>
      </nav>
      <Outlet />
    </div>
  );
};
```

**App.js**

```js
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Sobre from "./Sobre";
import Login from "./Login";
import Produto from "./Produto";
import Header from "./Header";
import NaoEncontrada from "./NaoEncontrada";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="sobre" element={<Sobre />} />
        <Route path="login" element={<Login />} />
        <Route path="produto/:id/*" element={<Produto />}>
          <Route path="/" element={<ProdutoDescricao />} />
          <Route path="avaliacao" element={<ProdutoAvaliacao />} />
          <Route path="customizado" element={<ProdutoCustomizado />} />
        </Route>
        <Route path="*" element={<NaoEncontrada />} />
      </Routes>
    </BrowserRouter>
  );
};
```

## Head

No React não temos acesso direto as tags e informações do Head.
Porém com o uso de rotas é essencial realizar a mudança do título e descrição
para cada rota. Podemos fazer isso atráves de um componente ou um custom hook.

**Head.js**
```js
const Head = (props) => {
  React.useEffect(() => {
    document.title = props.title;
    document
      .querySelector("meta[name='description']")
      .setAttribute("content", props.description);
  }, [props]);

  return <></>;
};
```

**Sobre.js**
```js
import Head from "./Head";

const Sobre = () => {
  return (
    <div>
      <Head title="Página Sobre" description="Descrição da sobre" />
      <h1>Sobre</h1>
      <p>Essa é a Sobre</p>
    </div>
  );
};
```

**Home.js**
```js
import Head from './Head';

const Home = () => {
  return (
    <div>
      <Head title="Página Home" description="Descrição da home" />
      <h1>Home</h1>
      <p>Essa é a home</p>
    </div>
  );
};
```

## Helmet

Uma extensão famosa é o `react-helmet`.
Ela retornar com componente em que você pode definir tags do
Head dentro do mesmo

```shell
npm install react-helmet
```

```js
import { Helmet } from 'react-helmet';

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Página Home</title>
        <meta name="description" content="Conteúdo da descrição" />
      </Helmet>
      <h1>Home</h1>
      <p>Essa é a home</p>
    </div>
  );
};

```