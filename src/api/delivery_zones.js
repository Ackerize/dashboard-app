import { API_HOST } from "../utils/utils";
import axios from "axios";

export function getAllDeliveryZones(){
  const url = `${API_HOST}/delivery-zones`;

  const idToken = localStorage.getItem('idToken');
  const authStr = 'Bearer '.concat(idToken);
  return axios.get(url, {headers: {'authorization': authStr} })
  .then((response) => response.data.delivery_zones)
  .catch((err) => console.log(err));
}