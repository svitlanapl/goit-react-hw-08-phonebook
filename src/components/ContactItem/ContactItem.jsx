import PropTypes from 'prop-types';
import { Item, Text, ButtonDelete } from './ContactItem.styled';

export const ContactItem = ({ id, name, number, deleteContact }) => {
  return (
    <Item>
      <Text>
        {name}: {number}
      </Text>
      <ButtonDelete name={id} type="button" onClick={deleteContact}>Delete
      </ButtonDelete>
    </Item>
  );
};

ContactItem.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  deleteContact: PropTypes.func.isRequired,
};
