import React from 'react';
import { CamperCardDiv, CamperImg, CamperName, CamperRate, CamperDescription, CamperLocation, CamperSvg } from './CamperCard.styled';
import symbolDefs from '../../images/symbol-defs.svg';

const CamperCard = ({ camper }) => {
  return (
    <CamperCardDiv>
      <CamperImg src={camper.gallery[0]} alt={camper.name} />
      <CamperName>{camper.name}</CamperName>
      <CamperRate href="/catalog">{camper.rating}</CamperRate>
      <CamperLocation><CamperSvg><use xlinkHref={`${symbolDefs}#icon-map-pin`} /></CamperSvg>{camper.location}</CamperLocation>
      <CamperDescription>{camper.description}</CamperDescription>
    </CamperCardDiv>
  );
};

export default CamperCard;
