import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operations';

import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import DialogActions from '@mui/material/DialogActions';
import AccountCircle from '@mui/icons-material/AccountCircle';
import InputAdornment from '@mui/material/InputAdornment';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import LockIcon from '@mui/icons-material/Lock';
import Box from '@mui/material/Box';

export const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = event => {
    event.preventDefault();
    const form = event.currentTarget;
    dispatch(
      register({
        name: form.elements.username.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
    };
    
    return (
        <Box
            sx={{
                p: 4,
                margin: 'auto',
                maxWidth: 400,
                minHeight: 200,
                boxShadow: '0 0 40px #9ae59a inset',
                borderRadius: '5px',
                backgroundColor: 'accent.main',
                '&:hover': {
                    boxShadow: '0 0 40px #ffad33 inset',
                },
            }}
        >
            <form
                onSubmit={handleSubmit}
                autoComplete="off"
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                }}
            >
                <TextField
                    autoFocus
                    margin='dense'
                    id='username'
                    label='Username'
                    type='username'
                    fullWidth
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                                <AccountCircle color='primary' />
                            </InputAdornment>
                        ),
                    }}
                    variant="outlined"
                />
                <TextField
                    autoFocus
                    margin='dense'
                    id='email'
                    label='Email Address'
                    type='email'
                    fullWidth
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                                <AlternateEmailIcon color='primary' />
                            </InputAdornment>
                        ),
                    }}
                    variant="outlined"
                />
                <TextField
                    autoFocus
                    margin='dense'
                    id='password'
                    label='Password'
                    type='password'
                    fullWidth
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                                <LockIcon color='primary' />
                            </InputAdornment>
                        ),
                    }}
                    variant="outlined"
                />
                <DialogActions>
                    {/* <Button color='primary' variant="contained" type="button">Cancel</Button> */}
                    <Button
                        color='secondary'
                        variant="contained"
                        type="submit"
                        sx={{ width: 100, margin: 'auto' }}
                    >
                        Register
                    </Button>
                </DialogActions>
            </form>
        </Box>
    );
};
