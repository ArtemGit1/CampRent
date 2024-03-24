import React, { useState, useEffect } from "react";
import { IoIosClose } from "react-icons/io";
import symbolDefs from '../../images/symbol-defs.svg';
import { ModalClose, CamperPriceModal, ModalContent, ModalWrapper, Wrapper, OpenModal, CamperGalleryImg, ModalBasicInfo, CamperLocationModal, CamperSvgLpcationModal, CamperGalleryContainer, CamperDetailsList, CamperDetailsLi, MiniTabs, MiniTab,} from "./ModalWindow.styled";
import Review from './Review';

const ModalWindow = ({ camper }) => {
  const [activeTab, setActiveTab] = useState('features');

  const handleClickOutside = (event) => {
    if (event.target === event.currentTarget) {
      closeModal();
    }
  };

  const closeModal = () => {
    window.location.hash = "";
  };

  useEffect(() => {
    const handleKeyPress = (event) => {
      if (event.key === "Escape") {
        closeModal();
      }
    };

    document.addEventListener("keydown", handleKeyPress);
    return () => {
      document.removeEventListener("keydown", handleKeyPress);
    };
  }, []);

  return (
    <Wrapper>
      <OpenModal href="#demo-modal">Show More</OpenModal>
      <ModalWrapper id="demo-modal" onClick={handleClickOutside}>
        <ModalContent>
            <ModalBasicInfo>
                <h1>{camper.name}</h1>
                <p><a href="#reviews">{camper.rating} ({camper.reviews.length} Reviews)</a></p>
                <CamperLocationModal>
                    <CamperSvgLpcationModal>
                    <use xlinkHref={`${symbolDefs}#icon-map-pin`} />
                    </CamperSvgLpcationModal>
                    {camper.location}
                </CamperLocationModal>
                <CamperPriceModal>€{camper.price},00</CamperPriceModal>
            </ModalBasicInfo>
            <CamperGalleryContainer>
                {camper.gallery.map((image, index) => (
                <CamperGalleryImg key={index} src={image} alt={`Camper ${index}`} />
                ))}
            </CamperGalleryContainer>
            <p>{camper.description}</p>
            
            <MiniTabs>
              <MiniTab active={activeTab === 'features'} onClick={() => setActiveTab('features')}>Features</MiniTab>
              <MiniTab active={activeTab === 'reviews'} onClick={() => setActiveTab('reviews')}>Reviews</MiniTab>
            </MiniTabs>

            {activeTab === 'features' && (
              <>
                <h2>Features</h2>
                <CamperDetailsList>
                  {Object.entries(camper.details).map(([key, value]) => (
                    <CamperDetailsLi key={key}>
                      {key}: {value}
                    </CamperDetailsLi>
                  ))}
                </CamperDetailsList>
              </>
            )}

            {activeTab === 'reviews' && (
              <>
                <h2 id="reviews">Reviews</h2>
                {camper.reviews.map((review, index) => (
                  <Review key={index} review={review} />
                ))}
              </>
            )}

            <ModalClose href="#" className="modal__close" onClick={closeModal}><IoIosClose /></ModalClose>
        </ModalContent>
      </ModalWrapper>
    </Wrapper>
  );
};

export default ModalWindow;
