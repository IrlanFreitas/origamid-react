# React Completo
Fundamentos

Puro, único plugin será o React Router Dom
Componentes Funcionais, Hooks, Ciclo de Vida, Formulários, Propriedades, Router e Mais

[Slides do curso](https://www.origamid.com/slide/react-completo/#/0101-o-curso/1)

Projeto do curso: https://www.dogs.origamid.dev/

## Grade do Curso
* React Completo
  * Ferramentas e Javascript
* React para Iniciantes
  * React Básico, Vite, JSX, Eventos, Components, Propriedades
* React Hooks
  * useState, useEffect, useRef, useMemo, useContext, Custom Hooks, Regras
* Formulários
  * Input, Select, Radio, Checkbox, useForm, Validação
* CSS
  * CSS Import, CSS Modules, Styled Components, Frameworks, Imagens
* React Router
  * Router, Link, useParams, Nested Routes, Head
* Mais React
  * PropTypes, Lazy e Suspense, Memo, useReducer, Classes
* Projeto Final
  * API, Autenticação, JWT, Scroll Infinito, Biblioteca Externa, Build, Loading

## Ferramentas
* Node / NPM
* Git
* Visual Studio Code
  * Extensões:
    * Origamid Next Theme
    * Live Server, Color Highlight, Prettier, ES7 React/Redux/ GraphQL snippets
* React Developer Tools

## Revisão de Javascript

* Tudo é objeto
Um objeto possui propriedades e métodos que podem ser diretos ou herdados(protótipo).

```javascript
// Objeto literal
const menu = {
  selector: '.principal',
  active () {
    const menuElement = document.querySelector(this.selector);
    menuElement.classList.add('active');
  }
}

menu.selector; // ".principal";
menu.active(); // adicionar active ao menu
menu.hasOwnProperty('class'); // método herdado
```
* Arrow Function
* Destructuring
* Rest e Spread
* Module (Export/Import)
* Fetch
* Async / Await
* Array (map e filter, reduce)
* Expressões