import React from "react";
import * as IoIcon from 'react-icons/io';

const Search = ({ setFilterWord }) => {

  const onChangeSearch = (e) => {
    setFilterWord(e.target.value);
  }

  return (
    <div className="d-flex md-form form-sm active-cyan-2 mt-2">
      <input
        className="form-control mr-3"
        type="text"
        placeholder="Buscar"
        aria-label="Buscar"
        onChange={onChangeSearch}
      />
      <div className="align-middle search"><IoIcon.IoMdSearch className="icon-search" /></div>
      
    </div>
  );
};

export default Search;
