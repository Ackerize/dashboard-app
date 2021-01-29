import { API_HOST } from "../utils/utils";

export function getAllPaintings(){
  const url = `${API_HOST}/paintings`;

  return fetch(url)
  .then((response) => {
    return response.json();
  })
  .then((result) => {
    return result;
  })
}

export function getOnePaintingById(idPainting){
  const url = `${API_HOST}/paintings/${idPainting}`;

  return fetch(url)
  .then((response) => {
    return response.json();
  })
  .then((result) => {
    return result.painting_info;
  })
}