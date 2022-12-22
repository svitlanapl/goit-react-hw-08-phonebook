import { Formik, ErrorMessage } from 'formik';
import PropTypes from 'prop-types';
import * as yup from 'yup';

import { InputForm, InputTitle, Input, FormButton, } from './ContactForm.styled'

const initialValues = {
    name: '',
    number: '',
};

let schema = yup.object().shape({
  name: yup.string().required('Please enter the name of the contact.'),
  number: yup.string().min(7).max(16).required('Please enter your phone number.'),
});



export const ContactForm = ({ addNewContact }) => {
    const handleSubmit = (values, { resetForm }) => {
        // console.log(values);
        addNewContact({
            name: values.name,
            number: values.number,
        });
        resetForm();
     };

    return (
        <Formik
            initialValues={initialValues}
            validationSchema={schema}
            onSubmit={handleSubmit}>
            <InputForm>
            <InputTitle htmlFor='name'>Name</InputTitle>
            <Input
                type="text"
                name="name"
                pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                required
            />
            <ErrorMessage name='name' />
            
            <InputTitle htmlFor='name'>Number</InputTitle>
            <Input
                type="tel"
                name="number"
                pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                required
            />
            <ErrorMessage name='number' />   
            <FormButton type="submit">Add contact</FormButton>
        </InputForm> 
        </Formik>
        
    )
};
 
ContactForm.propTypes = {
    addContact: PropTypes.func,
};