import { useSelector } from 'react-redux';
import { ContactElement } from 'components';
import PropTypes from 'prop-types';
import { selectContacts } from 'redux/selectors';

const ContactList = ({ contacts }) => {
  const { items: isLoading, error } = useSelector(selectContacts);

  return (
    <>
      {' '}
      {isLoading && !error && <p>Loading contacts...</p>}
      <ul>
        {contacts.map(({ name, phone, id }) => (
          <ContactElement name={name} phone={phone} key={id} id={id} />
        ))}
      </ul>
    </>
  );
};
export default ContactList;

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.shape()),
};
