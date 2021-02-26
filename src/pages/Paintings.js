import React, { useEffect, useState } from "react";
import Button from "../components/Button";
import Search from "../components/Search";
import { getAllPaintings } from "../api/paintings";
import TablePaintings from "../components/TablePaintings";

const Paintings = () => {
  const [paintingsArray, setPaintingsArray] = useState(null);
  const [filterWord, setFilterWord] = useState("");
  const [filteredPaintings, setFilteredPaintings] = useState([]);

  useEffect(() => {
    getAllPaintings().then((response) => {
      if (response) {
        const paintings = response;
        setPaintingsArray(paintings);
        setFilteredPaintings(paintings);
      }
    });
  }, []);

  useEffect(() => {
    if (!paintingsArray) return null;
    let regexInput = new RegExp(filterWord, "gi");
    const paintingsFilter = paintingsArray.filter((item) => {
      return item.name.match(regexInput);
    });
    setFilteredPaintings(paintingsFilter);
  }, [filterWord]);

  return (
    <div>
      <h1 className="text-center text-uppercase mt-4 mb-3">Paintings</h1>
      <div className="header-container">
        <Button type="add" />
        <Search setFilterWord={setFilterWord} />
      </div>
      {paintingsArray && <TablePaintings paintingsArray={filteredPaintings} />}
    </div>
  );
};

export default Paintings;
