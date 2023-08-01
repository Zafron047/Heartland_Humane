import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchKatBreeds } from '../redux/homeReducer/HomeSlice';

const Home = () => {
  const breedList = useSelector((state) => state.AllKats.breedList);
  const loading = useSelector((state) => state.AllKats.loading);
  const error = useSelector((state) => state.AllKats.error);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchKatBreeds());
  }, [dispatch]);

  let content;

  if (loading) {
    content = <p>Loading...</p>;
  } else if (error) {
    content = <p>{error}</p>;
  } else {
    content = (
      <ul>
        {breedList.map((breed) => (
          <li key={breed.id}>
            <h2>
              Breed:
              {' '}
              {breed.name}
            </h2>
            <p>
              Origin:
              {' '}
              {breed.origin}
            </p>
            <p>
              Weight:
              {' '}
              {breed.imperial}
            </p>
            <button type="button">Details</button>
          </li>
        ))}
      </ul>
    );
  }

  return (
    <div>
      <h1>Cats all breeds.</h1>
      {content}
    </div>
  );
};

export default Home;
