import React, {useState, useEffect} from 'react'
import { useHistory } from "react-router-dom";
import { getAllDeliveryZones } from '../api/delivery_zones';
import Button from '../components/Button';
import Search from '../components/Search';
import TableZones from '../components/TableZones';
import { sortBy } from '../utils/utils';

const DeliveryZones = () => {
  const [zones, setZones] = useState(null);
  const [searchedWord, setSearchedWord] = useState('');
  const [filteredZones, setFilteredZones] = useState([]);

  const history = useHistory();
  const handleClick = () => history.push('/delivery-zones/new');

  useEffect(() => {
    getAllDeliveryZones().then(response => {
      if(response){
        const array = response;
        array.sort(sortBy("id"));
        setZones(array);
        setFilteredZones(array);
      }
    });
  }, []);

  useEffect(() => {
    if(!zones) return null;
    let regexInput = new RegExp(searchedWord, "gi");
    const zonesFilter = zones.filter((item) => item.name.match(regexInput));
    setFilteredZones(zonesFilter);
  }, [searchedWord]);

  if(!zones) return null;

  return (
    <div>
      <h1 className="text-center text-uppercase mt-4 mb-3">Delivery zones</h1>
      <div className="header-container">
        <Button type="new" onClick={handleClick} />
        <Search setFilterWord={setSearchedWord} />
      </div>
      <TableZones zonesArray={filteredZones} />
    </div>
  )
}

export default DeliveryZones
