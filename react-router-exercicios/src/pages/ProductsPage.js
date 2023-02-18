import { useParams } from "react-router-dom";

function ProductsPage() {

    const pathParams = useParams()
    alert(pathParams.id)
    return (
      <section>
        <h1>Página de produtos</h1>
      </section>
    );
  }
  
  export default ProductsPage;