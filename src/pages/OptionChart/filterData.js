import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { filterDataPost } from '../redux/action/action';

function FilterData({ filterFinalData }) {
  const dispatch = useDispatch();

  useEffect(
    () => {
      dispatch(filterDataPost(filterFinalData));
    },
    [filterFinalData]
  );
  return <div />;
}

export default FilterData;
