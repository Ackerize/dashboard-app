import { API_HOST } from "../utils/utils";

export function getAllOrders(){
  const url = `${API_HOST}/orders`;

  return fetch(url)
  .then((response) => {
    return response.json();
  })
  .then((result) => {
    return result;
  })
}