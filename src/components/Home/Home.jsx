import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../../actions/products.js";

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  const products = useSelector((store) => store.products);
  return (
    <div>
      <div>
        {products.map((prod, id) => (
          <div key={id}>{prod.name}</div>
        ))}
      </div>
    </div>
  );
};

export default Home;
