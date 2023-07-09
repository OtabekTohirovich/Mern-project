import { Row, Col } from "react-bootstrap";
import React, { useReducer, useEffect } from "react";
import { simpleProducts } from "../data";
import { Link } from "react-router-dom";
import { Product } from "../types/Product";
import axios from "axios";
import { getError } from "../utils";
import { ApiError } from "../types/ApiError";
import LoadingBox from "../components/LoadingBox";
import MassageBox from "../components/MassageBox";

type State = {
  products: Product[];
  loading: boolean;
  error: string;
};
type Action =
  | { type: "FETCH_REQUEST" }
  | { type: "FETCH_SUCEES"; payload: Product[] }
  | { type: "FETCH_FAIL"; payload: string };

const initialState: State = {
  products: [],
  loading: true,
  error: "",
};

const reducer = (state: State, action: Action) => {
  switch (action.type) {
    case "FETCH_REQUEST":
      return { ...state, loading: true };
    case "FETCH_SUCEES":
      return { ...state, products: action.payload, loading: false };
    case "FETCH_FAIL":
      return { ...state, loading: true, error: action.payload };
  }
};

export default function HomePage() {
  const [{ loading, error, products }, dispatch] = useReducer<
    React.Reducer<State, Action>
  >(reducer, initialState);

  useEffect(() => {
    const fetchData = async () => {
      dispatch({ type: "FETCH_REQUEST" });
      try {
        const result = await axios.get("/api/products");
        dispatch({ type: "FETCH_SUCEES", payload: result.data });
      } catch (error) {
        dispatch({ type: "FETCH_FAIL", payload: getError(error as ApiError) });
      }
    };
    fetchData();
  }, []);

  return loading ? (
    <LoadingBox />
  ) : error ? (
    <MassageBox variant="danger">{error}</MassageBox>
  ) : (
    <Row>
      {products.map((product) => (
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
