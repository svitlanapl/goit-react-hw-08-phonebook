import { NavLink } from 'react-router-dom';

import { Button, Stack } from '@mui/material';

export const AuthNav = () => {

  return (
    <Stack spacing={3} direction="row" >
      <NavLink to="/register">
        <Button color='primary' variant="contained">
          Sing Up
        </Button>
      </NavLink>

      <NavLink to="/login">
        <Button color='secondary' variant="contained">
          Log In
        </Button>
      </NavLink>
    </Stack>
  );
};
