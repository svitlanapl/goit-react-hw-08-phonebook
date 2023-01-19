import { Navigation } from 'components/Navigation/Navigation';
import { UserMenu } from 'components/UserMenu/UserMenu';
import { AuthNav } from 'components/AuthNav/AuthNav';
import { useAuth } from 'hooks/useAuth';

import { AppBar, Box, Toolbar } from '@mui/material';

export const BarApp = () => {
  const { isLoggedIn } = useAuth();

  return (
    <AppBar position="fixed" >
      <Box component="main">
        <Toolbar >
          <Navigation />
          {isLoggedIn ? <UserMenu /> : <AuthNav />}
        </Toolbar>
      </Box>
    </AppBar> 
  );
};

