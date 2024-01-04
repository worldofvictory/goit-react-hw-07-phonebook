import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contactsApi';
import { selectContacts, selectFilter } from '../../redux/selectors';


const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilter);

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter)
  );

  return (
    <ul>
      {filteredContacts.map(({ id, name, number }) => (
        <li key={id}>
          <div>
            <div>
              <p>{name}: </p>
            </div>
            <div>
              <p>{number}</p>
            </div>
            <button type="button" onClick={() => dispatch(deleteContact(id))}>
              Delete
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default ContactList;