// import { AuthItem } from './AuthNav.styled';
import { NavLink } from 'react-router-dom';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';

export const AuthNav = () => {
  return (
    <Box
      // sx={{ flexGrow: 1 }}
    >
      <Stack spacing={2} direction="row" 
>
      <NavLink to={"/register"}>
          <Stack
            // spacing={2} direction="row"
          >
          <Button color='secondary' variant="contained">
          Sing Up
        </Button>
        </Stack>
        
      </NavLink>
      <NavLink to={"/login"}>
        <Button color='inherit' variant="outlined" >
          Log In
        </Button>
        </NavLink>
</Stack>
      
    </Box>
  );
};
