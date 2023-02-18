import { useNavigate } from "react-router-dom";
import { goToHomePage, goToProfilePage, goToProductsPage } from "./routers/Coordinator";
import Routers from "./routers/Routers";

function App() {
  const navigate = useNavigate()

  const handleClickGoToHomePage = () => {
    goToHomePage(navigate)
  }

  const handleClickGoToProfilePage = () => {
    goToProfilePage(navigate)
  }

  const handleClickGoToProductsPage = () => {
    goToProductsPage(navigate, 1)
  }

  

  return (
    <>
    <button onClick={handleClickGoToHomePage}>Botão de ir para página inicial</button>
    <button onClick={handleClickGoToProfilePage}>Botão de ir para página de perfil</button>
    <button onClick={handleClickGoToProductsPage}>Botão de ir para página de produtos</button>
      <Routers />
    </>
  );
}

export default App;
