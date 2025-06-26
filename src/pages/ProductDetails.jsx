
import { useParams, Link } from "react-router-dom";

export default function ProductDetails() {
  const params = useParams();
  return (
    <>
      <h1>the details of the products</h1>
      <p>
        we can use this -- {params.productId} -- to fetch the data of the
        product
      </p>
      <Link to="..">Back home</Link> {/* this will return to parent rout */}
      {/* this will return to previous page according to URL*/}
      <Link to=".." relative="path">
        Back to prev-page
      </Link>
    </>
  );
}
