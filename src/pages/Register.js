// import { Helmet } from 'react-helmet';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { RegisterForm } from 'components/RegisterForm/RegisterForm';

export const RegisterPage = () => {
  return (
    <Container>
      <Box sx={{ my: 14 }}>
        <RegisterForm />
      </Box>
    </Container>
  )
};