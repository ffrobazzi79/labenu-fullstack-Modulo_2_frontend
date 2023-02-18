import Header from "../components/Header";
import { useParams } from "react-router-dom";
function ProfilePage() {
  const params = useParams();
  console.log(params);
  return (
    <main>
      <Header />
      <h1>Página acerca de {params.name}</h1>
    </main>
  );
}

export default ProfilePage;