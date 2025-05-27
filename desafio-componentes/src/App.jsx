import { useState, useEffect } from 'react'
import Home from './pages/Home'
import Produtos from './pages/Produtos';

const routes = {
  '/': () => <Home />,
  '/produtos': () => <Produtos />
}

function App() {
  const [currentPath, setCurrentPath] = useState(window.location.pathname);

  useEffect(() => {
    const handlePopstate = () => {
      setCurrentPath(window.location.pathname);
    };

    window.addEventListener('popstate', handlePopstate);

    return () => {
      window.removeEventListener('popstate', handlePopstate);
    };
  }, []);

  const renderCurrentRoute = () => {
    const routeHandler = routes[currentPath] || (() => <div>404 Not Found</div>);
    return routeHandler();
  };
  return (
    <>
      <ul>
        <li>
          <a href="/">Home</a>
        </li>
        <li >
          <a href="/produtos">Produtos</a>
        </li>
      </ul>
      {renderCurrentRoute()}
    </>
  )
}

export default App
