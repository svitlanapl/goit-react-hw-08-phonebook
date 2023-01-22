import { Navigation } from 'components/Navigation/Navigation';
import { UserMenu } from 'components/UserMenu/UserMenu';
import { AuthNav } from 'components/AuthNav/AuthNav';
import { useAuth } from 'hooks/useAuth';

import { Box, AppBar, Toolbar, Typography } from '@mui/material';

export const AppHeaderBar = () => {
  const { isLoggedIn } = useAuth();

  return (
    <Box component="main" >
      <AppBar position="fixed" >
        <Toolbar >
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <Navigation />
          </Typography>
          {isLoggedIn ? <UserMenu /> : <AuthNav />}
        </Toolbar>
      </AppBar>
    </Box>
  );
};

