import React from 'react';
import CamperCard from '../CamperCard/CamperCard';

const CampersList = ({ campers }) => {
  return (
    <div>
      {campers.map((camper) => (
        <CamperCard key={camper._id} camper={camper} />
      ))}
    </div>
  );
};

export default CampersList;
