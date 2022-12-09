import PropTypes from 'prop-types';
import { ContactItem } from 'components/ContactItem';


export const ContactList = ({ filteredContacts, deleteContact }) => {
    return (
        <ul>
            {filteredContacts.map(({ id, name, number }) => (
                <ContactItem
                    key={id}
                    name={name}
                    number={number}
                    deleteContact={() => deleteContact(id)}
                // deleteContact={deleteContact}
                />
            ))}
        </ul>
    );
};

ContactList.propTypes = {
    filteredContacts: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            number: PropTypes.string.isRequired,
        })
    )
};