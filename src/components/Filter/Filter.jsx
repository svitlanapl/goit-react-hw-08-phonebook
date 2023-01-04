import { useSelector, useDispatch } from 'react-redux';
import { getFilter } from 'redux/selectors';
import { setContactFilter } from 'redux/filterSlice';

import {FilterTitle, FilterInput } from './Filter.styled';

export const Filter = () => {
    const filter = useSelector(getFilter);
    const dispatch = useDispatch();
    const onChangeFilter = event => dispatch(setContactFilter(event.currentTarget.value));

    return (
        <div>
            <FilterTitle>
                Find contacts by name
            </FilterTitle>
            <FilterInput
                type="text"
                name="filter"
                id="filter"
                onChange={onChangeFilter}
                value={filter}
                autoComplete="off"
                placeholder="input field"
            />
        </div>
    )  
};
 
