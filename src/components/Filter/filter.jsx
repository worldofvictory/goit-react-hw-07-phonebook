import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateFilter } from '../../redux/contactsSlice';


const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector((state) => state.filter);

  const changeFilter = (event) => {
    dispatch(updateFilter(event.currentTarget.value));
  };

  return (
    <label>
      <p>Find contacts by name</p>
      <input type="text" value={filter} onChange={changeFilter} className = "input" />
    </label>
  );
};

export default Filter;