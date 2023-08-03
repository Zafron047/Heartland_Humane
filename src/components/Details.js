import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchBreed } from '../redux/detailReducer/detailSlice';

const Details = () => {
  const breedData = useSelector((state) => state.CatBreeds.breedData);
  console.log(breedData);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchBreed());
  }, [dispatch]);
  return (
    <ul>
      {breedData.map((item) => (
        <li key={item.id}>
          <img src={item.url} alt="A Cat" />
          <h2>{item.name}</h2>
          <p>{item.lifeSpan}</p>
          <p>{item.adaptability}</p>
          <p>{item.affectionLevel}</p>
          <p>{item.energyLevel}</p>
          <p>{item.healthIssues}</p>
          <p>{item.intelligence}</p>
        </li>
      ))}
    </ul>
  );
};

export default Details;
