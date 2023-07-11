import { Button, Card } from "react-bootstrap";
import { Product } from "../types/Product";
import { Link } from "react-router-dom";
import Rating from "./Rating";

function ProductItem({ product }: { product: Product }) {
  return (
    <Card>
      <Link to={"/product/" + product.slug}>
        <img className="product-image" src={product.image} alt="das" />
      </Link>
      <Card.Body>
        <Card.Title>{product.name}</Card.Title>
        <Rating rating={product.rating} numReview={product.numberRewiews} />
        <Card.Text>{product.price}</Card.Text>
        {product.countInStock === 0 ? (
          <Button variant="light" disabled>
            Out of stock
          </Button>
        ) : (
          <Button >
            Add to cart
          </Button>
        )}
      </Card.Body>
    </Card>
  );
}

export default ProductItem;
