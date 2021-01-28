import { API_HOST } from "../utils/utils";

export function getAllMeasurements() {
  const url = `${API_HOST}/measurements`;

  return fetch(url)
    .then((response) => response.json())
    .then((result) => result.measurements);
}
