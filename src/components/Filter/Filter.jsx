import { useDispatch } from 'react-redux';
import { setFilter } from 'redux/filterSlice';

function Filter() {
  const dispatch = useDispatch();
  const handlerChangeFilter = e => {
    dispatch(setFilter(e.target.value.toLowerCase().trim()));
  };
  return (
    <>
      <label htmlFor="filter"></label>
      <input
        type="text"
        name="filter"
        placeholder="Find contacts by name"
        onChange={handlerChangeFilter}
      />
    </>
  );
}

export default Filter;
