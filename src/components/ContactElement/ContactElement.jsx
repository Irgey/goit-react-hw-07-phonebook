import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/slice';
import PropTypes from 'prop-types';
import css from './ContactElement.module.css';
const ContactElement = ({ name, number, onClickDeleteBtn, id }) => {
  const dispatch = useDispatch();

  const handleDelete = () => dispatch(deleteContact(id));
  return (
    <li className={css.listItem}>
      <p>
        {name}: {number}
      </p>
      <button onClick={handleDelete}>Delete</button>
    </li>
  );
};

export default ContactElement;

ContactElement.propTypes = {
  name: PropTypes.string,
  number: PropTypes.string,
  id: PropTypes.string,
  onClickDeleteBtn: PropTypes.func,
};
