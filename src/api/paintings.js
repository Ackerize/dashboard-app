import { API_HOST } from "../utils/utils";
import axios from "axios";

export function getAllPaintings(){
  const url = `${API_HOST}/paintings`;
  const idToken = localStorage.getItem('idToken');
  const authStr = 'Bearer '.concat(idToken);

  return axios.get(url, {headers: {'authorization': authStr} })
  .then((response) => response.data.paintings)
  .catch((err) => console.log(err));
}

export function getOnePaintingById(idPainting){
  const url = `${API_HOST}/paintings/${idPainting}`;
  const idToken = localStorage.getItem('idToken');
  const authStr = 'Bearer '.concat(idToken);

  return axios.get(url, {headers: {'authorization': authStr} })
  .then((response) => {
    console.log(response.data.painting_info[0])
    return response.data.painting_info[0]
  })
  .catch((err) => console.log(err));
}