import { useSelector, useDispatch } from 'react-redux';
import { getContacts } from 'redux/selectors';
import { addNewContact } from 'redux/contactsSlice';

// import { nanoid } from 'nanoid'; 

import { Formik, ErrorMessage } from 'formik';
import * as yup from 'yup';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';

import {
    InputForm,
    InputTitle,
    Input,
    FormButton,
} from './ContactForm.styled'

const initialValues = {
    name: '',
    number: '',
};

let schema = yup.object().shape({
  name: yup.string().required('Please enter the name of the contact.'),
  number: yup.string().min(7).max(16).required('Please enter your phone number.'),
});

export const ContactForm = () => {
    const contacts = useSelector(getContacts);
    const dispatch = useDispatch();

    const handleSubmit = (values, { resetForm }) => {
        const newContact = {
            name: values.name,
            number: values.number,
        };

        if (contacts.find(contact => contact.name === newContact.name)) {
            return toast.error(`${newContact.name} is already in contacts`);
        };

        dispatch(addNewContact(newContact));
    
        resetForm();
    };

    return (
        <>
            <Formik
                initialValues={initialValues}
                validationSchema={schema}
                onSubmit={handleSubmit}>
                <InputForm>
                    <InputTitle
                        htmlFor='name'>
                        Name
                    </InputTitle>
                    <Input
                        type="text"
                        name="name"
                        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                        required
                    />
                    <ErrorMessage name='name' />
            
                    <InputTitle
                        htmlFor='name'>
                        Number
                    </InputTitle>
                    <Input
                        type="tel"
                        name="number"
                        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                        required
                    />
                    <ErrorMessage name='number' />   

                    <FormButton
                        type="submit">
                        Add contact
                    </FormButton>
                </InputForm>
            </Formik>
            <ToastContainer />
        </>
        
    );
};
 
