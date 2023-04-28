import { useDispatch } from 'react-redux';
import { setFilter } from 'redux/slice';
import PropTypes from 'prop-types';

const Filter = ({ value }) => {
  const dispatch = useDispatch();

  const handleChange = e => {
    dispatch(setFilter(e.target.value));
  };
  return (
    <label>
      Find contacts by name
      <input type="text" onChange={handleChange} />
    </label>
  );
};

export default Filter;

Filter.propTypes = {
  value: PropTypes.string,
};
