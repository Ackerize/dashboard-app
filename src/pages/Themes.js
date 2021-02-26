import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { sortBy } from "../utils/utils";
import Button from "../components/Button";
import Search from "../components/Search";
import { getAllThemes } from "../api/themes";
import TableThemes from "../components/TableThemes";

const Themes = () => {
  const [themes, setThemes] = useState(null);
  const [searchedWord, setSearchedWord] = useState("");
  const [filteredThemes, setFilteredThemes] = useState([]);

  const history = useHistory();
  const handleClick = () => history.push("/themes/new");

  useEffect(() => {
    getAllThemes().then((response) => {
      if (response) {
        const array = response;
        array.sort(sortBy("id"));
        setThemes(array);
        setFilteredThemes(array);
      }
    });
  }, []);

  useEffect(() => {
    if (!themes) return null;
    let regexInput = new RegExp(searchedWord, "gi");
    const themesFilter = themes.filter((item) => item.name.match(regexInput));
    setFilteredThemes(themesFilter);
  }, [searchedWord]);

  return (
    <div>
      <h1 className="text-center text-uppercase mt-4 mb-3">Themes</h1>
      <div className="header-container">
        <Button type="new" onClick={handleClick} />
        <Search setFilterWord={setSearchedWord} />
      </div>
      {themes && <TableThemes themesArray={filteredThemes} />}
    </div>
  );
};

export default Themes;
