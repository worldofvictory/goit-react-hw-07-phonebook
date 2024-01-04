import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateFilter } from '../../redux/contactsSlice';
import { selectFilter } from '../../redux/selectors';


const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);

  const changeFilter = (event) => {
    dispatch(updateFilter(event.currentTarget.value));
  };

  return (
    <label>
      <p>Find contacts by name</p>
      <input type="text" value={filter} onChange={changeFilter} />
    </label>
  );
};

export default Filter;