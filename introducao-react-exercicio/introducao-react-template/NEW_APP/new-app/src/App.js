import logo from './img/logo.png';
import './App.css';

// function App() {

//   const nome = "FFR"
//   const olaMundo = () => {
//     alert("olá mundo !")
//   }

//   return (
//     <main>
//       <h1>Olá mundo!</h1>
//       <button onClick={olaMundo} className='meu-nome'>Clique em mim, {nome}</button>

//     </main>
//   );
// }

function App() {

  const nome = "FFR"
  const olaMundo = () => {
    alert("olá mundo !")
  }

  return (
    <body>
      <div class="container">
        <h1>Aprenda React na Labenu!</h1>
        <div>
          <div>
            <img className="Logo" src={logo} alt="logo"/>
          </div>
          <div>
            <a href="https://labenu.com.br">Site da Labenu</a>
          </div>
          <div>
            <button onClick={olaMundo}> Clique aqui! </button>
          </div>
        </div>
      </div>
    </body>
  );
}
export default App;
