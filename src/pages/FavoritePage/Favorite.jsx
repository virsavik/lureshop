import React from 'react';
import { useAppSelector } from '../../configs/store';
import { Row, Col } from 'reactstrap';

const Favorite = () => {
  const favorites = useAppSelector(state => state.favorite.products);

  return (
    <div>
      {favorites && favorites.length > 0 ? (
        <Row>
          {favorites.map((f, i) => (
            <Col key={i}>{f.name}</Col>
          ))}
        </Row>
      ) : (
        <div>No Favorite</div>
      )}
    </div>
  );
};
export default Favorite;
