import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { findMaterialById, sortBy } from "../utils/utils";
import Button from "../components/Button";
import Search from "../components/Search";
import { getAllMeasurements } from "../api/measurements";
import { getAllMaterials } from "../api/materials";
import TableMeasurements from "../components/TableMeasurements";

const Measurements = () => {
  const [measurements, setMeasurements] = useState(null);
  const [searchedWord, setSearchedWord] = useState("");
  const [filteredMeasurements, setFilteredMeasurements] = useState([]);
  const [materials, setMaterials] = useState(null);

  const history = useHistory();
  const handleClick = () => history.push("/measurements/new");

  useEffect(() => {
    getAllMeasurements().then((response) => {
      const array = response;
      array.sort(sortBy("id"));
      setMeasurements(array);
      setFilteredMeasurements(array);
    });
  }, []);

  useEffect(() => {
    getAllMaterials().then((response) => {
      setMaterials(response.materials);
    });
  }, []);

  useEffect(() => {
    if (!measurements || !materials) return null;
    let regexInput = new RegExp(searchedWord, "gi");
    const measurementsFilter = measurements.filter((item) => {
      const material_name = findMaterialById(materials, item.material_id);
      return material_name.match(regexInput);
    });
    setFilteredMeasurements(measurementsFilter);
  }, [searchedWord]);

  if (!measurements || !materials) return null;

  return (
    <div>
      <h1 className="text-center text-uppercase mt-4 mb-3">Measurements</h1>
      <div className="header-container">
        <Button type="new" onClick={handleClick} />
        <Search setFilterWord={setSearchedWord} />
      </div>
      <TableMeasurements
        measurementsArray={filteredMeasurements}
        materialsArray={materials}
      />
    </div>
  );
};

export default Measurements;
