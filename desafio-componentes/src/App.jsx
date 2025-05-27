import { useState, useEffect } from 'react'
import Home from './pages/Home'
import Produtos from './pages/Produtos/Produtos';
import Header from './components/Header/Header';

// const routes = {
//   '/': () => <Home />,
//   '/produtos': () => <Produtos />
// }

function App() {
  const [currentPath, setCurrentPath] = useState(window.location.pathname);

  useEffect(() => {
    // const handlePopstate = () => {
    // };
    setCurrentPath(window.location.pathname);

    // window.addEventListener('popstate', handlePopstate);

    // return () => {
    //   window.removeEventListener('popstate', handlePopstate);
    // };
  }, []);

  // const renderCurrentRoute = () => {
  //   const routeHandler = routes[currentPath] || (() => <div>404 Not Found</div>);
  //   return routeHandler();
  // };

  return (
    <section>
      <Header />
      {/* {renderCurrentRoute()} */}
      {currentPath === '/' && <Home />}
      {currentPath === '/produtos' && <Produtos />}
    </section>
  )
}

export default App
