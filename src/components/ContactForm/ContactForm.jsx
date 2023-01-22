import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectContacts } from 'redux/contacts/selectors';
import { addContact } from 'redux/contacts/operations';

import { nanoid } from 'nanoid'; 

import { Formik, ErrorMessage } from 'formik';
import * as yup from 'yup';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';

import Button from '@mui/material/Button';
import DialogActions from '@mui/material/DialogActions';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import AccountCircle from '@mui/icons-material/AccountCircle';
import ContactPhoneIcon from '@mui/icons-material/ContactPhone';

import {
    InputForm,
    InputTitle,
    Input,
} from './ContactForm.styled'

const initialValues = {
    id:'',
    name: '',
    number: '',
};

let schema = yup.object().shape({
  name: yup.string().required('Please enter the name of the contact.'),
  number: yup.string().min(7).max(16).required('Please enter your phone number.'),
});

export const ContactForm = () => {
    const contacts = useSelector(selectContacts);
    const dispatch = useDispatch();

    const handleSubmit = (values, { resetForm }) => {
        const newContact = {
            id: 'id'+nanoid(),
            name: values.name,
            number: values.number,
        };

        if (contacts.find(contact => contact.name === newContact.name)) {
            return toast.error(`${newContact.name} is already in contacts`);
        };

        dispatch(addContact(newContact));
    
        resetForm();
    };

    return (
        <>
            <Formik
                initialValues={initialValues}
                validationSchema={schema}
                onSubmit={handleSubmit}>
                <InputForm>
                    {/* <InputTitle
                        htmlFor='name'>
                        Name
                    </InputTitle>
                    <Input
                        type="text"
                        name="name"
                        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                        required
                    /> */}
                <TextField
                    autoFocus
                    margin='dense'
                    id='name'
                    label='Name'
                    type='text'
                    fullWidth
                    variant="outlined"
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                                <AccountCircle color='primary' />
                            </InputAdornment>
                        ),
                    }}
                />
                <ErrorMessage name='name' />
            
                    {/* <InputTitle
                        htmlFor='name'>
                        Number
                    </InputTitle>
                    <Input
                        type="tel"
                        name="number"
                        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                        required
                    /> */}
                <TextField
                    autoFocus
                    margin='dense'
                    id='number'
                    label='Phone number'
                    type='tel'
                    fullWidth
                    variant="outlined"
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                                <ContactPhoneIcon color='primary' />
                            </InputAdornment>
                        ),
                    }}
                />
                <ErrorMessage name='number' />
                <DialogActions>
                    <Button
                        type="submit"
                        color='secondary'
                        variant="contained"
                        
                        sx={{ width: 140, margin: 'auto' }}
                    >
                        Add contact
                    </Button>
                    </DialogActions>
                </InputForm>
            </Formik>
            <ToastContainer />
        </>
        
    );
};





