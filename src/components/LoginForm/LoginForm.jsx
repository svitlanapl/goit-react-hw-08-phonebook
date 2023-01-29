import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/operations';

import { useFormik } from 'formik';
import * as yup from 'yup';

import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import DialogActions from '@mui/material/DialogActions';
import AccountCircle from '@mui/icons-material/AccountCircle';
import InputAdornment from '@mui/material/InputAdornment';
import LockIcon from '@mui/icons-material/Lock';
import Box from '@mui/material/Box';

const validationSchema = yup.object({
  email: yup
    .string('Enter your email')
    .email('Enter a valid email')
    .required('Email is required'),
  password: yup
    .string('Enter your password')
    .min(8, 'Password should be of minimum 8 characters length')
    .required('Password is required'),
});

export const LoginForm = () => {
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },

    validationSchema: validationSchema,
    onSubmit: (values, { resetForm }) => {
      // alert(JSON.stringify(values, null, 2));
      const loginForm = {
        email: values.email.trim(),
        password: values.password.trim()
      };
      
      dispatch(logIn(loginForm));
      resetForm();
    }
  });
  return (
    <Box
      sx={{
      p: 4,
      margin: 'auto',
      maxWidth: 400,
      minHeight: 200,
      boxShadow: '0 0 40px #9ae59a inset',
      borderRadius: '5px',
      backgroundColor: 'accent.main',
        '&:hover': {
          boxShadow: '0 0 40px #ffad33 inset',
        },
      }}
    >
      <form onSubmit={formik.handleSubmit}>
        <TextField
          fullWidth
          id="email"
          name="email"
          label="Email"
          value={formik.values.email}
          onChange={formik.handleChange}
          error={formik.touched.email && Boolean(formik.errors.email)}
          helperText={formik.touched.email && formik.errors.email}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <AccountCircle
                  color='primary' />
              </InputAdornment>
            ),
          }}
          variant="outlined"
          sx={{mb:'16px'}}
        />
        <TextField
          fullWidth
          id="password"
          name="password"
          label="Password"
          type="password"
          value={formik.values.password}
          onChange={formik.handleChange}
          error={formik.touched.password && Boolean(formik.errors.password)}
          helperText={formik.touched.password && formik.errors.password}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <LockIcon color='primary' />
              </InputAdornment>
            ),
          }}
          variant="outlined"
          sx={{mb:'16px'}}
        />
        <DialogActions>
          <Button
            color='secondary'
            variant="contained"
            type="submit"
            sx={{ width: 100, margin: 'auto' }}
          >
            Log In
          </Button>
        </DialogActions>
      </form>
    </Box>
  );
};


// ============================================================

// import { useDispatch } from 'react-redux';
// import { logIn } from 'redux/auth/operations';

// import Button from '@mui/material/Button';
// import TextField from '@mui/material/TextField';
// import DialogActions from '@mui/material/DialogActions';
// import AccountCircle from '@mui/icons-material/AccountCircle';
// import InputAdornment from '@mui/material/InputAdornment';
// import LockIcon from '@mui/icons-material/Lock';
// import Box from '@mui/material/Box';

// export const LoginForm = () => {
//   const dispatch = useDispatch();

//   const handleSubmit = event => {
//     event.preventDefault();
//     const form = event.currentTarget;
      
//     dispatch(
//       logIn({
//         email: form.elements.email.value,
//         password: form.elements.password.value,
//       })
//     );
      
//     form.reset();
//   };

//   return (
//     <Box
//       sx={{
//       p: 4,
//       margin: 'auto',
//       maxWidth: 400,
//       minHeight: 200,
//       boxShadow: '0 0 40px #9ae59a inset',
//       borderRadius: '5px',
//       backgroundColor: 'accent.main',
//         '&:hover': {
//           boxShadow: '0 0 40px #ffad33 inset',
//         },
//       }}
//     >
//       <form
//         onSubmit={handleSubmit}
//         autoComplete="off"
//         sx={{
//           display: 'flex',
//           flexDirection: 'column',
          
//         }}
//       >
//         <TextField
//           autoFocus
//           margin='dense'
//           id='email'
//           label='Email Address'
//           type='email'
//           autoComplete="current-password"
//           fullWidth
//           InputProps={{
//             startAdornment: (
//               <InputAdornment position="start">
//                 <AccountCircle
//                   color='primary' />
//               </InputAdornment>
//             ),
//           }}
//           variant="outlined"
//         />

//         <TextField
//           autoFocus
//           margin='dense'
//           id='password'
//           label='Password'
//           type='password'
//           fullWidth
//           InputProps={{
//             startAdornment: (
//               <InputAdornment position="start">
//                 <LockIcon color='primary' />
//               </InputAdornment>
//             ),
//           }}
//           variant="outlined"
//         />

//         <DialogActions>
//           <Button
//             color='secondary'
//             variant="contained"
//             type="submit"
//             sx={{ width: 100, margin: 'auto' }}
//           >
//             Log In
//           </Button>
//         </DialogActions>
//       </form>
//     </Box>
//   );
// };