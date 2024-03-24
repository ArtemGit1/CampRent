import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const OpenModal = styled.a`
  border-radius: 200px;
  width: 132px;
  height: 56px;   

  margin-left: 750px;
  margin-top: -25px;
  font-weight: 500;
  font-size: 16px;
  line-height: 3.5;
  letter-spacing: -0.01em;
  text-decoration: none;
  text-align: center;
  border: 1px solid rgba(71, 84, 103, 0.2);
  background-color: #F2F4F7;
  cursor: pointer;

  color: black;

  &:hover,
  &:focus{
    color: white;
    background-color: #E44848;
  }
`;

export const ModalWrapper = styled.div`
  visibility: hidden;
  opacity: 0;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(77, 77, 77, .7);
  transition: all .4s;

  &:target {
    visibility: visible;
    opacity: 1;
  }
`;

export const ModalContent = styled.div`
    border-radius: 20px;
    width: 982px;
    max-height: 700px; 
    overflow-y: auto; 
    padding: 40px;
    position: relative;
    background: #fff;
`;

export const ModalClose = styled.a`
  position: absolute;
  top: 50px;
  right: 50px;
  color: #585858;
  text-decoration: none;

`;

export const CamperGalleryImg = styled.img`
    width: 310px;
    height: 290px;
    margin: 0px 5px;
    border-radius: 20px;
`;

export const ModalBasicInfo = styled.div`
    width: 902px;
`;

export const CamperLocationModal = styled.p`
    display: flex;
    margin-left: 100px;
    margin-top: -34px;
`;

export const CamperSvgLpcationModal = styled.svg`
    width: 16px;
    height: 16px;
`;

export const CamperPriceModal = styled.p`
    font-weight: 600;
    font-size: 24px;
`;

export const CamperGalleryContainer = styled.div`

`;

export const CamperDetailsLi = styled.li`
    border-radius: 100px;
    padding: 12px 18px;
    background-color: #F2F4F7;

`;

export const CamperDetailsList = styled.ul`
    list-style: none;
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    width: 500px;
    margin-left: -45px;
`;

export const MiniTabs = styled.div`
    display: flex;
    gap: 20px;
    margin-top: 20px;
`;

export const MiniTab = styled.div`
    padding: 10px 20px;
    cursor: pointer;
    border-radius: 5px;
    background-color: ${props => props.active ? "#E44848" : "#F2F4F7"};
    color: ${props => props.active ? "white" : "black"};

    &:hover {
        background-color: ${props => props.active ? "#E44848" : "#D3D3D3"};
    }
`;


export const ReviewContainer = styled.div`
  margin-bottom: 20px;
  width: 500px;
`;

export const ReviewerName = styled.p`
  font-weight: bold;
  margin-bottom: 5px;
`;

export const ReviewerRating = styled.p`
    margin-bottom: 5px;
`;

export const ReviewComment = styled.p`
    margin-bottom: 10px;
`;
