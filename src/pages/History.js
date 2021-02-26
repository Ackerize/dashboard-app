import React, { useState, useEffect } from "react";
import Search from "../components/Search";
import TableOrders from "../components/TableOrders";
import DatePicker from "../components/DatePicker";
import Select from "react-select";
import {
  formatDate,
  sortBy,
  sortOption,
  formatDateSearch,
} from "../utils/utils";
import { getAllOrders } from "../api/orders";
import moment from "moment";

const History = () => {
  const [ordersArray, setOrdersArray] = useState(null);
  const [searchedWord, setSearchedWord] = useState("");
  const [resultingOrders, setResultingOrders] = useState([]);
  const [selectedOption, setSelectedOption] = useState(null);

  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  useEffect(() => {
    getAllOrders().then((response) => {
      if (response) {
        const orders = response;
        setOrdersArray(orders);
        setResultingOrders(orders);
      }
    });
  }, []);

  useEffect(() => {
    if (ordersArray) {
      const copyArray = [...ordersArray];
      const result = copyArray.filter((item) =>
        moment(formatDate(item.order_date), "YYYY-MM-DD").isBetween(
          moment(formatDate(startDate), "YYYY-MM-DD"),
          moment(formatDate(endDate), "YYYY-MM-DD"),
          undefined,
          "[]"
        )
      );
      setResultingOrders(result);
    }
  }, [startDate, endDate]);

  useEffect(() => {
    if (!ordersArray) return null;
    let regexInput = new RegExp(searchedWord, "gi");
    const ordersFilter = ordersArray.filter((order) => {
      return (
        order.customer_name.match(regexInput) ||
        order.delivery_zone.name.match(regexInput) ||
        order.status.match(regexInput) ||
        order.id.toString().match(regexInput) ||
        formatDateSearch(order.order_date).match(regexInput)
      );
    });
    setResultingOrders(ordersFilter);
  }, [searchedWord]);

  useEffect(() => {
    if (ordersArray) {
      const copyArray = [...ordersArray];
      copyArray.sort(sortBy(selectedOption));
      setResultingOrders(copyArray);
    }
  }, [selectedOption]);

  if (!ordersArray) return null;

  return (
    <div>
      <h1 className="text-center text-uppercase mt-4 mb-5">
        Historial de pedidos
      </h1>
      <div className="header-order-table">
        <DatePicker
          startDate={startDate}
          setStartDate={setStartDate}
          endDate={endDate}
          setEndDate={setEndDate}
        />
        <Select
          options={sortOption}
          name="searchable"
          className="w-100 custom-control"
          placeholder="Ordenar por ..."
          isSearchable
          isClearable
          onChange={(value) => setSelectedOption(value ? value.value : null)}
          noOptionsMessage={(inputValue) => "No se encontró esa opción"}
        />
        <Search setFilterWord={setSearchedWord} />
      </div>
      <TableOrders orders={resultingOrders} />
    </div>
  );
};

export default History;
