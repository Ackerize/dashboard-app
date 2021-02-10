import { API_HOST } from "../utils/utils";
import axios from "axios";

export function getAllOrders() {
  const url = `${API_HOST}/orders`;
  const idToken = localStorage.getItem('idToken');
  const authStr = 'Bearer '.concat(idToken);

  return axios.get(url, {headers: {'authorization': authStr} })
  .then((response) => response.data.orders)
  .catch((err) => console.log(err));
}

export function getOrderDetail(idOrder) {
  const url = `${API_HOST}/orders-details/order/${idOrder}`;
  const idToken = localStorage.getItem('idToken');
  const authStr = 'Bearer '.concat(idToken);

  return axios.get(url, {headers: {'authorization': authStr} })
  .then((response) => response.data.order_detail)
  .catch((err) => console.log(err));
}

export function getOrderById(idOrder){
  const url = `${API_HOST}/orders/${idOrder}`;
  const idToken = localStorage.getItem('idToken');
  const authStr = 'Bearer '.concat(idToken);
  
  return axios.get(url, {headers: {'authorization': authStr} })
  .then((response) => response.data.order[0])
  .catch((err) => console.log(err));
}
