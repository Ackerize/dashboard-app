import React,{ useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'
import { getOnePaintingById } from '../api/paintings';
import CardHeading from '../components/CardHeading';
import EditBody from '../components/EditBody'

const FormEdit = () => {
  const { id } = useParams();
  const [painting, setPainting] = useState(null);

  useEffect(() => {
    getOnePaintingById(id).then((response) => {
      setPainting(response);
    });
  }, []);

  if(!painting) return null;

  return (
    <div className="page-wrapper p-t-45 p-b-50">
      <div className="wrapper wrapper--w790">
        <div className="card card-5 card-painting">
          <CardHeading title="Actualizar cuadro" />
          <EditBody painting={painting} />
        </div>
      </div>
    </div>
  )
}

export default FormEdit
