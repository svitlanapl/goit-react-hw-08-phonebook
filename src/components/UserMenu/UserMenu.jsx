import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/operations';
import { useAuth } from 'hooks/useAuth';

import { Typography, Button, Stack } from '@mui/material';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
      <Stack spacing={5} direction="row" >
          <Typography variant='h5' component='div'>
              Welcome, <span style={{ color: '#ffad33', fontWeight:'bold' }}>{user.name}</span> !
          </Typography>
          <Button
              color='secondary'
              variant="contained"
              type="button"
              onClick={() => dispatch(logOut())}
          >
              Log out
          </Button>
    </Stack>
  );
};