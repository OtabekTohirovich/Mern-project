import { Row, Col } from "react-bootstrap";

import { simpleProducts } from "../data";
import { Link } from "react-router-dom";

export default function HomePage() {
  return (
    <Row>
      {simpleProducts.map((product) => (
        <Col
          sm={6}
          md={4}
          lg={3}
          key={product.slug}
          style={{ listStyle: "none" }}
        >
          <Link to={"/product/" + product.slug}>
            <img className="product-image" src={product.image} alt="das" />
          </Link>
          <h2>{product.name}</h2>
          <p>$ {product.price}</p>
        </Col>
      ))}
    </Row>
  );
}
