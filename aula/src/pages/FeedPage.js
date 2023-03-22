import useProtectedPage from "../hooks/useProtectedPage";

function FeedPage() {

  useProtectedPage();
  return (
    <main>
      <h1>Página de Feed</h1>
      <p> estamos nooooo Feeeed :D</p>
    </main>
  );
}

export default FeedPage;