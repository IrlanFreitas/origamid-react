import { GlobalStorage } from "./context/GlobalContext"
import Produtos from "./Produtos"


function App() {

  return (
    <GlobalStorage>
      <Produtos />
    </GlobalStorage>
  )
}

export default App
