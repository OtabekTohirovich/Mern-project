import { ApiError } from "./types/ApiError";

export const getError = (error: ApiError) => {
  return error.response && error.response.data.massage
    ? error.response.data.massage
    : error.massage;
};
