import { useAuth } from 'hooks/useAuth';
import { NavLink } from 'react-router-dom';

import { Typography, Stack } from '@mui/material';

export const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <Stack spacing={5} direction="row" >
      <NavLink to="/">
        <Typography
          variant='h5'
          component='div'
          
        >
          Home
        </Typography>
      </NavLink>

      {isLoggedIn &&
        <NavLink to='/contacts'>
          <Typography
            variant='h5'
            component='div'
          >
            Contacts
          </Typography>
        </NavLink>
        }
    </Stack>
  );
};
