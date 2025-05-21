import { createRoot } from 'react-dom/client'
import App from './App.jsx'

// * modo estrito exibe erros no ambiente de desenvolvimento
{/* <StrictMode></StrictMode> */ }
createRoot(document.getElementById('root')).render(
  <App />,
)
