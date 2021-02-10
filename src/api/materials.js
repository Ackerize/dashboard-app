import axios from "axios";
import { API_HOST } from "../utils/utils";

export function getAllMaterials(){
  const url = `${API_HOST}/materials`;
  const idToken = localStorage.getItem('idToken');
  const authStr = 'Bearer '.concat(idToken);
  
  return axios.get(url, {headers: {'authorization': authStr} })
  .then((response) => response.data.materials)
  .catch((err) => console.log(err));
}