import React, { useState } from 'react';
import CamperCard from '../CamperCard/CamperCard';
import { CampersListDiv } from './CampersList.styled';
import LoadMoreButton from '../LoadMore/LoadMoreButton';

const CampersList = ({ campers, cardsPerPage }) => {
  const [visibleCount, setVisibleCount] = useState(cardsPerPage);

  const handleLoadMore = () => {
    setVisibleCount(visibleCount + cardsPerPage);
  };

  return (
    <CampersListDiv>
      {campers.slice(0, visibleCount).map((camper) => (
        <CamperCard key={camper._id} camper={camper} />
      ))}
      {visibleCount < campers.length && <LoadMoreButton onClick={handleLoadMore} />}
    </CampersListDiv>
  );
};

export default CampersList;