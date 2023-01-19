import { useSelector } from 'react-redux';
import { selectContacts } from 'redux/contacts/selectors';
import {selectContactFilter } from 'redux/filter/selectors';

import { ContactItem } from 'components/ContactItem';

export const ContactList = () => {
    const contacts = useSelector(selectContacts);
    const filterValue = useSelector(selectContactFilter);

    const getFilteredContacts = () => {
        return filterValue
            ? contacts.filter(contact =>
                contact.name.toLowerCase().includes(filterValue)
            )
            : contacts;
    };

    return (
        <ul>
            {getFilteredContacts().map(({ id, name, number }) => (
                <ContactItem key={id} id={id} name={name} number={number} />
            ))}
        </ul>
    );
};