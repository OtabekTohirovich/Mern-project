import { Helmet } from "react-helmet-async";
import { useParams } from "react-router-dom";
import { useGetProductDetailsQuery } from "../hooks/ProductHooks";
import LoadingBox from "../components/LoadingBox";
import MassageBox from "../components/MassageBox";
import { getError } from "../utils";
import { ApiError } from "../types/ApiError";
import { Badge, Button, Card, Col, ListGroup, Row } from "react-bootstrap";
import Rating from "../components/Rating";

export default function ProductPage() {
  const params = useParams();
  const { slug } = params;
  const { data: product, isLoading, error } = useGetProductDetailsQuery(slug!);

  return isLoading ? (
    <LoadingBox />
  ) : error ? (
    <MassageBox variant="danger">{getError(error as ApiError)}</MassageBox>
  ) : !product ? (
    <MassageBox variant="danger">Product not found</MassageBox>
  ) : (
    <div>
      <Row>
        <Col md={6}>
          <img className="large" src={product.image} alt={product.name} />
        </Col>
        <Col md={3}>
          <ListGroup variant="flush">
            <ListGroup.Item>
              <Helmet>
                <title>{product.name}</title>
              </Helmet>
              <h1>{product.name}</h1>
            </ListGroup.Item>
            <ListGroup.Item>
              <Rating
                rating={product.rating}
                numReview={product.numberRewiews}
              ></Rating>
            </ListGroup.Item>
            <ListGroup.Item>Price: $ {product.price}</ListGroup.Item>
            <ListGroup.Item>
              Description:
              <p>{product.discription}</p>
            </ListGroup.Item>
          </ListGroup>
        </Col>

        <Col md={3}>
          <Card>
            <Card.Body>
              <ListGroup variant="flush">
                <ListGroup.Item>
                  <Row>
                    <Col>Price:</Col>
                    <Col>${product.price}</Col>
                  </Row>
                </ListGroup.Item>
                <ListGroup.Item>
                  <Row>
                    <Col>Status:</Col>
                    <Col>
                      {product.countInStock > 0 ? (
                        <Badge bg="success">In Stock</Badge>
                      ) : (
                        <Badge bg="danger">Unavailable</Badge>
                      )}
                    </Col>
                  </Row>
                </ListGroup.Item>
                {product.countInStock > 0 && (
                  <ListGroup.Item>
                    <div className="d-grid">
                      <Button variant="primary">Add to Cart</Button>
                    </div>
                  </ListGroup.Item>
                )}
              </ListGroup>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
}
