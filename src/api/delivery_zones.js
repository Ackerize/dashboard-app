import { API_HOST } from "../utils/utils";

export function getAllDeliveryZones(){
  const url = `${API_HOST}/delivery-zones`;

  return fetch(url)
  .then((response) => {
    return response.json();
  })
  .then((result) => {
    return result;
  })
}