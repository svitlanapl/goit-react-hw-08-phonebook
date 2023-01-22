import { Box, Container, Typography } from '@mui/material';

export const HomePage = () => {
  return (
    <Container>
      <Box sx={{ my: 14 }}>
        <Typography
          variant="h4"
          component="div"
          sx={{ fontWeight: '500', textAlign: 'center' }}
        >
          Welcome 👋
        </Typography>
        <Typography
          variant="h4"
          component="div"
          sx={{ textAlign: 'center' }}
        >
          Please, Sign up or Log in to have access to the Phonebook!
        </Typography>
      </Box>
    </Container>
  );
};

