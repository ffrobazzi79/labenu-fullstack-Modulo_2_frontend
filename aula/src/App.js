import Router from "./routes/Router";


// Exercício 1
// Na página LoginPage utilize o endpoint Login para implementar a função de logar na aplicação.
// Salve o token no Local Storage. Assim que um usuário logar na aplicação, ele deve ser redirecionado para a página de Feed.

// Exercício 2
// Na página SignUpPage utilize
// o endpoint Signup para implementar a função de cadastro. Salve o token no Local Storage. Assim que um usuário se cadastrar na aplicação, ele deve ser redirecionado para a página de Feed.

// Exercício 3
// Proteja a página de Feed para que seja acessível apenas para usuários autenticados e autorizados. Se quiser, crie um Custom Hook para isso!


export default function App() {
  return (
    <div>
      <Router />
    </div>
  );
}
