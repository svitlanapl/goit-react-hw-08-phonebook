import PropTypes from 'prop-types';

import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/operations';

import { Item, Text, ButtonDelete } from './ContactItem.styled';

export const ContactItem = ({ id, name, phone }) => {
  const dispatch = useDispatch();

  const handleDelete = () => dispatch(deleteContact(id));

  return (
    <Item>
      <Text>
        {name}: {phone}
      </Text>
      <ButtonDelete
        name={id}
        type="button"
        onClick={handleDelete}
        aria-label="Delete contact"
      >
        Delete
      </ButtonDelete>
    </Item>
  );
};

ContactItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
};


