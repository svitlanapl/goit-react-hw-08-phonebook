import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
// import ContactPhoneIcon from '@mui/icons-material/ContactPhone';

const styles = {
  container: {
    display: 'block',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontWeight: 500,
    fontSize: 32,
    textAlign: 'center',
  },
};

export const HomePage = () => {
  return (
    <Container>
      <Box sx={{ my: 14 }}>
    <div style={styles.container}>
      {/* <ContactPhoneIcon color="primary" fontSize="large" /> */}
      <p style={styles.title}>
            Welcome 👋
          </p>
          <p style={styles.title}>
        Please, Sign up or Log in to have access to the Phonebook!
      </p>

        </div>
        </Box>
      </Container>
  );
};

