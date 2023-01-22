import { ContactList } from 'components/ContactList/ContactList';
import { Filter } from 'components/Filter/Filter';
import { ContactForm } from 'components/ContactForm/ContactForm';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchContacts } from 'redux/contacts/operations';

import { Box, Typography } from '@mui/material';

export const ContactsPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Box sx={{my: 14}}>
    <Box sx={{
      p: 4,
      margin:'auto',
      maxWidth: 500,
      minHeight: 200,
      boxShadow: '0 0 40px #9ae59a inset',
      borderRadius: '5px',
      backgroundColor: 'accent.main',
        '&:hover': {
          boxShadow: '0 0 40px #ffad33 inset',
        },
    }}>
      <Typography
        variant="h4"
        component="div"
        sx={{ fontWeight: '400', textAlign: 'center' }}
      >
        Phonebook
      </Typography>
      <ContactForm />
      <Typography
        variant="h5"
        component="div"
        sx={{ fontWeight: '500', textAlign: 'start' }}
      >
        Contacts
      </Typography>
      <Filter />
      <ContactList />
      </Box>
      </Box>
  );
};