import { API_HOST } from "../utils/utils";
import axios from "axios";

export function getAllMeasurements() {
  const url = `${API_HOST}/measurements`;

  const idToken = localStorage.getItem('idToken');
  const authStr = 'Bearer '.concat(idToken);
  return axios.get(url, {headers: {'authorization': authStr} })
  .then((response) => response.data.measurements)
  .catch((err) => console.log(err));
}
