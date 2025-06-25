import { Link } from "react-router-dom";

export default function Home() {
  return (
    // using Link to navigate to products page
    <>
      <h1>HOME PAGE</h1>
      <Link to={"/products"}>go products</Link>
    </>
  );
}
