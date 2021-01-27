import { map } from "lodash";
import moment from 'moment';

export const cabecerasPaintings = [
  "Cuadro",
  "Nombre",
  "Descripcion",
  "Existencias",
  "Disponible",
  "Opciones",
  "",
];

export const cabecerasOrders = [
  "Id",
  "Cliente",
  "Fecha de orden",
  "Fecha de entrega",
  "Zona de entrega",
  "Estado",
  "Cantidad total",
  "Opciones",
];

export const API_HOST = "https://api-rest-canvas.herokuapp.com/api";

const characters =
  "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

export function generateString(length) {
  let result = "";
  const charactersLength = characters.length;
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}

export const formatArray = (array) =>
  map(array, (item) => ({ label: item.name, value: item.id }));

export const filterArray = (array) => map(array, (item) => item.value);

export const filterObject = (obj) => obj.value;

export const dataDelete = {
  title: "Confirmar para eliminar",
  subtitle: "¿Estás seguro de eliminar este cuadro?",
  btnYesText: "¡Sí, eliminar!",
  btnNoText: "No",
  btnYesId: "btn-no",
  btnNoId: "btn-yes",
};

export const findStatus = (status) => {
  switch (status) {
    case "EN PROCESO":
      return "status pending";
    case "ENTREGADA":
      return "status delivered";
    default:
      return "";
  }
};

export const statuses = [
  { value: "PENDIENTE", label: "PENDIENTE" },
  { value: "CONFIRMADA", label: "CONFIRMADA" },
  { value: "CANCELADA", label: "CANCELADA" },
  { value: "EN PROCESO", label: "EN PROCESO" },
  { value: "ENVIADA", label: "ENVIADA" },
  { value: "ENTREGADA", label: "ENTREGADA" },
];

export const sortOption = [
  { value: "id", label: "ID" },
  { value: "cliente", label: "CLIENTE" },
  { value: "estado", label: "ESTADO" },
  { value: "fecha-orden", label: "FECHA DE ORDEN" },
  { value: "fecha-entrega", label: "FECHA DE ENTREGA" },
  { value: "zona-entrega", label: "ZONA DE ENTREGA" },
];

export const sortBy = (type) => {
  switch (type) {
    case "id":
      return (a, b) => {
        if (a.id < b.id) return -1;
        if (a.id > b.id) return 1;
        return 0;
      };
    case "cliente":
      return (a, b) => {
        if (a.customer_name < b.customer_name) return -1;
        if (a.customer_name > b.customer_name) return 1;
        return 0;
      };
    case "status":
      return (a, b) => {
        if (a.status < b.status) return -1;
        if (a.status > b.status) return 1;
        return 0;
      };
    case "zona-entrega":
      return (a, b) => {
        if (a.delivery_zone.name < b.delivery_zone.name) return -1;
        if (a.delivery_zone.name > b.delivery_zone.name) return 1;
        return 0;
      };
    case "fecha-orden":
      return (a,b) => {
        const dateA = new Date(a.order_date), dateB = new Date(b.order_date);
        return dateA - dateB;
      };
    case "fecha-entrega":
      return (a,b) => {
        const dateA = new Date(a.delivery_date), dateB = new Date(b.delivery_date);
        return dateA - dateB;
      };
    default:
      break;
  }
};

export const formatDate = (date) => {
  return moment(date).format("YYYY-MM-DD");
}
