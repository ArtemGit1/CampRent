import styled from 'styled-components';

export const CamperCardDiv = styled.div`
    border: 1px solid rgba(16, 24, 40, 0.2);
    border-radius: 20px;
    padding: 24px 24px 0px 24px;
    max-width: 888px;
    height: 358px;
    margin: 30px auto;
`;

export const CamperImg = styled.img`
    border-radius: 10px;
    max-width: 290px;
    height: 310px;
    object-fit: cover;
    object-position: center;
    display: flex;

    @media (min-width: 370px) and (max-width: 767px) {

    }
`;

export const CamperName = styled.h2`
    font-weight: 600;
    font-size: 24px;
    display: flex;
    line-height: 125%;

    margin-left: 317px;
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

export const CamperDetailsList = styled.ul`
    list-style: none;
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    max-width: 888px;
`;

export const CamperDetailsLi = styled.li`
    border-radius: 100px;
    padding: 12px 18px;
    background-color: #F2F4F7;
    flex: 0 0 auto;
    margin-bottom: 10px;
    box-sizing: border-box; 
`;

export const CamperDetailsDiv = styled.div`
    margin-left: 275px;

`;

export const CamperPrice = styled.p`
    margin-left: 800px;
    margin-top: -45px;

    font-weight: 600;
    font-size: 24px;
    line-height: 125%;
`;