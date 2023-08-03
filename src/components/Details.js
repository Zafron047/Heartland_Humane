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
    <div>Hi</div>
  );
};

export default Details;
