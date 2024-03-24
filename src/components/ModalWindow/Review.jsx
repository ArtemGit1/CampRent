import React from 'react';
import { ReviewContainer, ReviewerName, ReviewerRating, ReviewComment } from './ModalWindow.styled';

const Review = ({ review }) => {
  return (
    <ReviewContainer>
      <ReviewerName>{review.reviewer_name}</ReviewerName>
      <ReviewerRating>{review.reviewer_rating}</ReviewerRating>
      <ReviewComment>{review.comment}</ReviewComment>
    </ReviewContainer>
  );
};

export default Review;
