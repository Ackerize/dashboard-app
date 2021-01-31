import React, {useState, useEffect} from 'react'
import { useHistory } from "react-router-dom";
import { getAllMaterials } from '../api/materials';
import Button from '../components/Button';
import Search from '../components/Search';
import TableMaterials from '../components/TableMaterials';
import { sortBy } from '../utils/utils';

const Materials = () => {
  const [materials, setMaterials] = useState(null);
  const [searchedWord, setSearchedWord] = useState('');
  const [filteredMaterials, setFilteredMaterials] = useState([]);

  const history = useHistory();
  const handleClick = () => history.push('/materials/new');

  useEffect(() => {
    getAllMaterials().then(response => {
      const array = response.materials;
      array.sort(sortBy("id"));
      setMaterials(array);
      setFilteredMaterials(array);
    })
  }, [])

  useEffect(() => {
    if(!materials) return null;
    let regexInput = new RegExp(searchedWord, "gi");
    const materialsFilter = materials.filter((item) => item.name.match(regexInput));
    setFilteredMaterials(materialsFilter);
  }, [searchedWord]);

  if(!materials) return null;

  return (
    <div>
      <h1 className="text-center text-uppercase mt-4 mb-3">Materials</h1>
      <div className="header-container">
        <Button type="new" onClick={handleClick} />
        <Search setFilterWord={setSearchedWord} />
      </div>
      <TableMaterials materialsArray={filteredMaterials} />
    </div>
  )
}

export default Materials
