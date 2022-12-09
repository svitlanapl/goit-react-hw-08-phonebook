import PropTypes from 'prop-types';

export const ContactItem = ({ id, name, number, deleteContact }) => {
  return (
      <>
      <div>
        {name}:
      </div>
      <div
      >
        <span>{number}</span>
        <button name={id} type="button" onClick={deleteContact}>
        </button>
      </div>
    </>
  );
};

ContactItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  deleteContact: PropTypes.func.isRequired,
};
