import { Helmet } from "react-helmet-async";
import { useParams } from "react-router-dom";
import { useGetProductDetailsQuery } from "../hooks/ProductHooks";
import LoadingBox from "../components/LoadingBox";
import MassageBox from "../components/MassageBox";
import { getError } from "../utils";
import { ApiError } from "../types/ApiError";

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
      <Helmet>
        <title>Product page</title>
      </Helmet>
      ProductPage
    </div>
  );
}
