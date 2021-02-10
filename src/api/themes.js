import axios from "axios";
import { API_HOST } from "../utils/utils";

export function getAllThemes(){
  const url = `${API_HOST}/themes`;
  const idToken = localStorage.getItem('idToken');
  const authStr = 'Bearer '.concat(idToken);

  return axios.get(url, {headers: {'authorization': authStr} })
  .then((response) => response.data.themes)
  .catch((err) => console.log(err));
}