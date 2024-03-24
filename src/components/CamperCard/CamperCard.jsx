import React, { useState } from 'react';
import { CamperCardDiv, CamperImg, CamperName, CamperRate, CamperDescription, CamperLocation, CamperSvg, CamperDetailsList, CamperDetailsLi, CamperDetailsDiv, CamperPrice,  } from './CamperCard.styled';
import symbolDefs from '../../images/symbol-defs.svg';
import ModalWindow from 'components/ModalWindow/ModalWindow';

const CamperCard = ({ camper }) => {
  const [selectedCamper, setSelectedCamper] = useState(null);
  
  
  const functions = [];

  if (camper.details.airConditioner) {
    functions.push({ name: 'Air Conditioner', iconId: 'icon-air-conditioner-svgrepo-com' });
  }
  if (camper.details.bathroom) {
    functions.push({ name: 'Bathroom', iconId: 'icon-bathroom-svgrepo-com'});
  }
  if (camper.details.kitchen) {
    functions.push({ name: 'Kitchen', iconId: 'icon-kitchen-room-svgrepo-com' });
  }
  if (camper.details.beds) {
    functions.push({ name: `Beds: ${camper.details.beds}`, iconId: 'icon-bed-svgrepo-com'});
  }
  if (camper.details.TV) {
    functions.push({ name: 'TV', iconId: 'icon-tv-television-svgrepo-com'});
  }
  if (camper.details.CD) {
    functions.push({ name: 'CD', iconId: 'icon-cd-svgrepo-com'});
  }
  if (camper.details.radio) {
    functions.push({ name: 'Radio', iconId: 'icon-radio-3-svgrepo-com'});
  }
  if (camper.details.shower) {
    functions.push({ name: 'Shower', iconId: 'icon-shower-svgrepo-com'});
  }
  if (camper.details.toilet) {
    functions.push({ name: 'Toilet', iconId: 'icon-toilet-svgrepo-com'});
  }
  if (camper.details.freezer) {
    functions.push({ name: 'Freezer', iconId: 'icon-refrigerator-svgrepo-com'});
  }
  if (camper.details.microwave) {
    functions.push({ name: 'Microwave', iconId: 'icon-microwave-svgrepo-com'});
  }
  if (camper.details.gas) {
    functions.push({ name: `Gas: ${camper.details.gas}`, iconId: 'icon-gas-gas-station-svgrepo-com'});
  }
  if (camper.details.water) {
    functions.push({ name: `Water: ${camper.details.water}`, iconId: 'icon-water-drop-4-svgrepo-com'});
  }

  return (
    <CamperCardDiv>

      <button onClick={() => setSelectedCamper(camper)}>Show More</button>
      <CamperImg src={camper.gallery[0]} alt={camper.name} />
      <CamperName>{camper.name}</CamperName>
      <CamperPrice>€{camper.price},00</CamperPrice>
      <CamperRate href="/catalog">{camper.rating} ({camper.reviews.length} Reviews)</CamperRate>
      <CamperLocation>
        <CamperSvg>
          <use xlinkHref={`${symbolDefs}#icon-map-pin`} />
        </CamperSvg>
        {camper.location}
      </CamperLocation>
      <CamperDescription>{camper.description}</CamperDescription>
      <CamperFunctions functions={functions} />

      {selectedCamper && <ModalWindow camper={selectedCamper} />}
    </CamperCardDiv>
  );
};

const CamperFunctions = ({ functions }) => {
  return (
    <CamperDetailsDiv>
      <CamperDetailsList>
        {functions.map((func, index) => (
          <CamperDetailsLi key={index}>
            <CamperSvg>
              <use xlinkHref={`${symbolDefs}#${func.iconId}`} />
            </CamperSvg>
            {func.name}
          </CamperDetailsLi>
        ))}
      </CamperDetailsList>
    </CamperDetailsDiv>
  );
};

export default CamperCard;