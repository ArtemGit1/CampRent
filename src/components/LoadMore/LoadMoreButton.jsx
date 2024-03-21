import React from 'react';
import { LoadMore } from './LoadMore.styled';

const LoadMoreButton = ({ onClick }) => {
  return (
    <LoadMore onClick={onClick}>
      Load more
    </LoadMore>
  );
};

export default LoadMoreButton;
