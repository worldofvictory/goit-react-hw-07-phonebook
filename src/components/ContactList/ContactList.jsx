import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contactsSlice';


const ContactList = () => {
  const dispatch = useDispatch();
  const filteredContacts = useSelector((state) => {
    const filtered = state.contacts.filter((contact) =>
      contact.name.toLowerCase().includes(state.filter.toLowerCase())
    );
    return filtered;
  });

  return (
    <ul className="list">
      {filteredContacts.map(({ id, name, number }) => (
        <li key={id}>
          <div className="div">
            <div>
              <p className="name">{name}: </p>
            </div>
            <div>
              <p className="name">{number}</p>
            </div>
            <button type="button" onClick={() => dispatch(deleteContact(id))} className="button">
              Delete
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default ContactList;