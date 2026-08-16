import { ApiError, handleError } from "../utils/errorHandler";

export async function fetchProductt() {
  try {
    const response = await fetch("https://dummyjson.com/products");

    if (!response.ok) {
      throw new ApiError("failed to fetch products");
    }
    const data = await response.json();
    return data.products;
  } catch (error) {
    console.log(handleError(error));
    return [];
  }
}
