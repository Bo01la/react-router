import { Link } from "react-router-dom";

const DATABASE_PRODUCTS = [
  { id: "product1", title: "Tshirts" },
  { id: "product2", title: "shoes" },
  { id: "product3", title: "Skirts" },
];

export default function Products() {
  return (
    <>
      <h1>Products PAGE</h1>
      <ul>
        {DATABASE_PRODUCTS.map((product) => (
          <li key={product.id}>
            <Link to={`/products/${product.id}`}>{product.title}</Link>
          </li>
        ))}
      </ul>
    </>
  );
}
