import PropTypes from 'prop-types';
import {FilterTitle, FilterInput } from './Filter.styled';

export const Filter = ({ onChange, value }) => {
    return (
        <div>
            <FilterTitle>Find contacts by name</FilterTitle>
            <FilterInput
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