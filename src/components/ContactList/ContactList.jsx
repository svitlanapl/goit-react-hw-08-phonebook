import { useSelector } from 'react-redux';
import { getContacts, getFilter } from 'redux/selectors';

import { ContactItem } from 'components/ContactItem';

export const ContactList = () => {
    const contacts = useSelector(getContacts);
    const filterValue = useSelector(getFilter);

    const getFilteredContacts = () => {
        return filterValue
            ? contacts.filter(contact =>
                contact.name.toLowerCase().includes(filterValue)
            )
            : contacts;
    };

    return (
        <ul>
            {getFilteredContacts().map(({ id, name, phone }) => (
                <ContactItem key={id} id={id} name={name} phone={phone} />
            ))}
        </ul>
    );
};