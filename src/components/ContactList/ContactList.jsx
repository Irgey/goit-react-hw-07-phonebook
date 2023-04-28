import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from 'redux/operations';
import { useEffect } from 'react';
import { ContactElement } from 'components';
import PropTypes from 'prop-types';
import { selectContacts, selectFilter } from 'redux/selectors';

const ContactList = ({ onClickDeleteBtn }) => {
  const dispatch = useDispatch();

  const { items: contacts, isLoading, error } = useSelector(selectContacts);
  console.log(contacts, isLoading, error);
  useEffect(() => {
    console.log('useffect');
    dispatch(fetchContacts());
  }, [dispatch]);

  const filter = useSelector(selectFilter);
  const renderContacts = () => {
    if (filter) {
      const normalizedFilter = filter.toLowerCase();
      const filteredContacts = contacts.filter(contact =>
        contact.name.toLowerCase().includes(normalizedFilter)
      );
      return filteredContacts;
    }
    return contacts;
  };

  return (
    <>
      {' '}
      {isLoading && !error && <p>Loading contacts...</p>}
      <ul>
        {renderContacts().map(({ name, phone, id }) => (
          <ContactElement name={name} phone={phone} key={id} id={id} />
        ))}
      </ul>
    </>
  );
};
export default ContactList;

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.shape()),
  onClickDeleteBtn: PropTypes.func,
};
