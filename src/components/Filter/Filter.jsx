import { useSelector, useDispatch } from 'react-redux';
import { getFilter } from 'redux/filter/slice';
import { selectContactFilter } from 'redux/filter/selectors';

import { Typography, TextField, InputAdornment } from '@mui/material';
import PersonSearchIcon from '@mui/icons-material/PersonSearch';

export const Filter = () => {
    const filter = useSelector(selectContactFilter);
    const dispatch = useDispatch();
    const onChangeFilter = event => dispatch(getFilter(event.currentTarget.value));

    return (
        <div>
            <Typography variant="h6" component="div">
                Find contacts by name
            </Typography>
            <TextField
                onChange={onChangeFilter}
                value={filter}
                autoFocus
                margin='dense'
                id='filter'
                label='Search name'
                type='text'
                fullWidth
                variant="outlined"
                InputProps={{
                    startAdornment: (
                        <InputAdornment position="start">
                            <PersonSearchIcon color='primary' />
                        </InputAdornment>
                    ),
                }}   
            />
        </div>
    )  
};
 
