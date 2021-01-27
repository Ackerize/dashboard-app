import { API_HOST } from "../utils/utils";

export function getAllThemes(){
  const url = `${API_HOST}/themes`;

  return fetch(url)
  .then((response) => {
    return response.json();
  })
  .then((result) => {
    return result;
  })
}