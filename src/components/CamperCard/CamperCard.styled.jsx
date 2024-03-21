import styled from 'styled-components';

export const CamperCardDiv = styled.div`
    border: 1px solid rgba(16, 24, 40, 0.2);
    border-radius: 20px;
    padding: 24px;
    max-width: 888px;
    height: 358px;

`;

export const CamperImg = styled.img`
    border-radius: 10px;
    max-width: 290px;
    height: 310px;
    object-fit: cover;
    object-position: center;
    display: flex;

    @media (max-width: 1439px) {

    }
`;

export const CamperName = styled.h2`
    font-weight: 600;
    font-size: 24px;
    display: flex;
    line-height: 125%;

    margin-left: 320px;
    margin-top: -315px;
`;

export const CamperRate = styled.a`
    display: flex;
    cursor: pointer;
    margin-left: 320px;
`;

export const CamperDescription = styled.p`
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
    overflow: hidden;
    margin-left: 320px;
    font-weight: 400;
    font-size: 16px;
    line-height: 150%;
`;

export const CamperLocation = styled.p`
    display: flex;
    margin-top: 0px;
    margin-left: 350px;
    margin-top: -18px;
`;

export const CamperSvg = styled.svg`
    width: 16px;
    height: 16px;
    margin-right: 5px;
`;