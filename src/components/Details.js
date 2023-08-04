import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import Nav from './Nav';
import { fetchBreed } from '../redux/detailReducer/detailSlice';

const Details = () => {
  const breedData = useSelector((state) => state.CatBreeds.breedData);
  const loading = useSelector((state) => state.CatBreeds.loading);
  const error = useSelector((state) => state.CatBreeds.error);
  const dispatch = useDispatch();
  const { breedId } = useParams();

  useEffect(() => {
    dispatch(fetchBreed(breedId));
  }, [dispatch, breedId]);

  if (loading) {
    return <p>Loading...</p>;
  } if (error) {
    return (
      <p>
        Error fetching:
        { error }
      </p>
    );
  } return (
    <>
      <Nav />
      <ul>
        {breedData.map((item) => (
          <li key={item.id}>
            <img src={item.url} alt="A Cat" />
            <h2>
              Name:
              {' '}
              {item.name}
            </h2>
            <p>
              Lifespan:
              {' '}
              {item.lifeSpan}
            </p>
            <p>
              Adaptability:
              {' '}
              {item.adaptability}
            </p>
            <p>
              AffectionLevel:
              {' '}
              {item.affectionLevel}
            </p>
            <p>
              EnergyLevel:
              {' '}
              {item.energyLevel}
            </p>
            <p>
              HealthIssues:
              {' '}
              {item.healthIssues}
            </p>
            <p>
              Intelligence:
              {' '}
              {item.intelligence}
            </p>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Details;
