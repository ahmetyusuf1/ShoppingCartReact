import axios from "axios";
import { useEffect, useState } from "react";
import Loading from "../components/Loading";
import Card from "../components/Card";

const MainPage = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((response) => setProducts(response?.data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <main className="my-5 container d-flex flex-wrap justify-content-center gap-2">
      {products ? (
        products.map((item) => <Card key={item.id} data={item} />)
      ) : (
        <Loading />
      )}
    </main>
  );
};

export default MainPage;
