import { useNavigate } from "react-router-dom";
import { irParaHome, irParaPerfil } from "../routes/coordinator";

function Header() {
  const navigate = useNavigate();
  return (
    <header>
      <button
        onClick={() => {
          irParaHome(navigate);
        }}
      >
        Ir para página inicial
      </button>
      <button
        onClick={() => {
          irParaPerfil(navigate, "Conway");
        }}
      >
        Ir para página de perfil
      </button>
    </header>
  );
}

export default Header;
