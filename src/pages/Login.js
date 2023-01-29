import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { LoginForm } from 'components/LoginForm/LoginForm';

export const LoginPage = () => {
    return (
      <Container>
        <Box sx={{ my: 14 }}>
          <LoginForm />
        </Box>
      </Container>
    )
};