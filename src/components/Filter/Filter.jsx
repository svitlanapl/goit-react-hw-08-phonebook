import { useSelector, useDispatch } from 'react-redux';
import { getFilter } from 'redux/filter/slice';
import { selectContactFilter } from 'redux/filter/selectors';



import {FilterTitle, FilterInput } from './Filter.styled';

export const Filter = () => {
    const filter = useSelector(selectContactFilter);
    const dispatch = useDispatch();
    const onChangeFilter = event => dispatch(getFilter(event.currentTarget.value));

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
 
