import React, { useEffect, useState } from 'react';
import { fetchCampers } from '../api/api';
import CamperList from '../components/CampersList/CampersList';
import CamperFilter from '../components/CamperFilter/CamperFilter';
import { CatalogDiv } from './Catalog.styled';

const Catalog = () => {
  const [campers, setCampers] = useState([]);
  const cardsPerPage = 4;

  useEffect(() => {
    const fetchData = async () => {
      const campersData = await fetchCampers();
      setCampers(campersData);
    };

    fetchData();
  }, []);

  return (
    <CatalogDiv>
      <CamperFilter functions={[]} />
      <CamperList campers={campers} cardsPerPage={cardsPerPage} />
    </CatalogDiv>
  );
};

export default Catalog;