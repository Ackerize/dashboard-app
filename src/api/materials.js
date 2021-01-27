import { API_HOST } from "../utils/utils";

export function getAllMaterials(){
  const url = `${API_HOST}/materials`;

  return fetch(url)
  .then((response) => {
    return response.json();
  })
  .then((result) => {
    return result;
  })
}