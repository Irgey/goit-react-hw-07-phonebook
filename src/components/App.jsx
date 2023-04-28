/**
 * Refactored with hooks
 */
import { ContactForm, ContactList, Filter } from './index';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from 'redux/operations';
import { selectContacts, selectFilter } from 'redux/selectors';
export const App = () => {
  const filter = useSelector(selectFilter);
  const { items: contacts, isLoading, error } = useSelector(selectContacts);
  console.log(contacts, isLoading, error);
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
    <div
      style={{
        paddingLeft: '15px',
      }}
    >
      <h1>Phonebook</h1>

      <ContactForm />

      <h2>Contacts</h2>
      {/* <Filter value={filter} /> */}
      <ContactList contacts={renderContacts()} />
    </div>
  );
};
/**
 * Class method
 */
// import { Component } from 'react';
// import { nanoid } from 'nanoid';
// import { ContactForm, ContactList, Filter } from './index';
// export class App extends Component {
//   state = {
//     contacts: [
//       { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
//       { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
//       { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
//       { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
//     ],
//     filter: '',
//   };
//   componentDidMount() {
//     const localStorageContacts = localStorage.getItem('contacts');
//     if (localStorageContacts) {
//       this.setState({ contacts: JSON.parse(localStorageContacts) });
//     }
//   }
//   componentDidUpdate(prevProps, prevState) {
//     if (prevState.contacts !== this.state.contacts)
//       localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
//   }
//   addContact = e => {
//     e.preventDefault();
//     const {
//       name: { value: name },
//       number: { value: number },
//     } = e.target;
//     if (
//       this.state.contacts.find(
//         contact => contact.name.toLowerCase() === name.toLowerCase()
//       )
//     ) {
//       return alert(`${name} is already in contacts.`);
//     }
//     const contactObj = {
//       name,
//       number,
//       id: nanoid(),
//     };
//     this.setState(prevState => {
//       return { contacts: [...prevState.contacts, contactObj] };
//     });
//     Array.from(e.target).forEach(e => (e.value = ''));
//   };
//   deleteContact = id => {
//     this.setState(prevState => ({
//       contacts: prevState.contacts.filter(contact => contact.id !== id),
//     }));
//   };
//   filterContacts = e => {
//     this.setState({ filter: e.target.value });
//   };
//   renderContacts = () => {
//     if (this.state.filter) {
//       const normalizedFilter = this.state.filter.toLowerCase();
//       const filteredContacts = this.state.contacts.filter(contact =>
//         contact.name.toLowerCase().includes(normalizedFilter)
//       );
//       return filteredContacts;
//     }
//     return this.state.contacts;
//   };

//   render() {
//     return (
//       <div
//         style={{
//           paddingLeft: '15px',
//         }}
//       >
//         <h1>Phonebook</h1>

//         <ContactForm onSubmit={this.addContact} />

//         <h2>Contacts</h2>
//         <Filter
//           onFilterElements={this.filterContacts}
//           value={this.state.filter}
//         />
//         <ContactList
//           contacts={this.renderContacts()}
//           onClickDeleteBtn={this.deleteContact}
//         />
//       </div>
//     );
//   }
// }
