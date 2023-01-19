import { useAuth } from 'hooks/useAuth';
import Typography from '@mui/material/Typography';
import { NavList } from './Navigation.styled';
import { NavLink } from 'react-router-dom';
export const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
      <nav>
          <NavList>
              <NavLink to={"/"}>
              <Typography
                  variant='h5'
                //   sx={{ flexGrow: 1 }}
              >Home</Typography>
              </NavLink>
              {isLoggedIn &&
                  <NavLink to={'/contacts'}>
                      <Typography variant='h5'>
                          Contacts
                          </Typography>
                  </NavLink>}
         </NavList>
      </nav>
  );
};
