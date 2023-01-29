import React from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';

import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import AccountCircle from '@mui/icons-material/AccountCircle';
import InputAdornment from '@mui/material/InputAdornment';
import ContactPhoneIcon from '@mui/icons-material/ContactPhone';


import { addContact } from 'redux/contacts/operations';
import { useDispatch } from 'react-redux';

const validationSchema = yup.object({
  name: yup
    .string('name your email')
    .required('name is required'),
  number: yup
    .string('Enter your number')
    .min(7, 'number should be of minimum 7 characters length')
    .required('number is required'),
});

export const ContactForm = ({ newContact }) => {
  
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      name: '',
      number: '',
      },
      
    validationSchema: validationSchema,
    onSubmit: (values, { resetForm }) => {
      // alert(JSON.stringify(values, null, 2));
      const newContact ={
            name: values.name.trim(),
            number: values.number.trim(),
      };
      dispatch(addContact(newContact));

      resetForm();
    }
    });

  return (
      <form onSubmit={formik.handleSubmit} >
        <TextField
          fullWidth
          id="name"
          name="name"
          label="name"
          type="text"
          value={formik.values.name}
          onChange={formik.handleChange}
          error={formik.touched.name && Boolean(formik.errors.name)}
          helperText={formik.touched.name && formik.errors.name}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <AccountCircle
                  color='primary' />
              </InputAdornment>
            ),
          }}
        sx={{mb:'16px'}}
        
        />
        <TextField
          fullWidth
          id="number"
          name="number"
          label="number"
          type="tel"
          value={formik.values.number}
          onChange={formik.handleChange}
          error={formik.touched.number && Boolean(formik.errors.number)}
          helperText={formik.touched.number && formik.errors.number}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <ContactPhoneIcon 
                  color='primary' />
              </InputAdornment>
            ),
          }}
        sx={{mb:'16px'}}
        />
        <Button color="secondary" variant="contained" fullWidth type="submit" sx={{ width: 140, mb:'16px'}}>
           Add contact
        </Button>
      </form>
  );
};

