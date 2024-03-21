import React, { useEffect, useState } from 'react';
import { fetchCampers } from '../api/api';
import CampersList from '../components/CampersList/CampersList';
import LoadMoreButton from 'components/LoadMore/LoadMoreButton';

const Catalog = () => {
  const [campers, setCampers] = useState([]);
  const [visibleCampers, setVisibleCampers] = useState([]);
  const [loadMoreVisible, setLoadMoreVisible] = useState(true);
  const cardsPerPage = 4;

  useEffect(() => {
    const fetchData = async () => {
      const campersData = await fetchCampers();
      setCampers(campersData);
      setVisibleCampers(campersData.slice(0, cardsPerPage));
      if (campersData.length <= cardsPerPage) {
        setLoadMoreVisible(false);
      }
    };

    fetchData();
  }, []);

  const handleLoadMore = () => {
    const nextVisibleCampers = campers.slice(
      visibleCampers.length,
      visibleCampers.length + cardsPerPage
    );
    setVisibleCampers([...visibleCampers, ...nextVisibleCampers]);
    if (visibleCampers.length + cardsPerPage >= campers.length) {
      setLoadMoreVisible(false);
    }
  };

  return (
    <div>
      <CampersList campers={visibleCampers} />
      {loadMoreVisible && <LoadMoreButton onClick={handleLoadMore} />}
    </div>
  );
};

export default Catalog;
