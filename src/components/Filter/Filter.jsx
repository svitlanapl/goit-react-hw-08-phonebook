import PropTypes from 'prop-types';

export const Filter = ({ onChange, value }) => {
    return (
        <div>
            <h3>Find contacts by name</h3>
            <input
                type="text"
                onChange={onChange}
                value={value}
            />
        </div>
    )  
};
 
Filter.propTypes = {
    onChange: PropTypes.func.isRequired,
    value: PropTypes.string.isRequired,
};