import * as Yup from 'yup';

export const validationSchema = Yup.object().shape({
  email: Yup.string()
    .email('Must be a valid email adress')
    .max(255, 'Must be shorter than 255')
    .required('Email is required'),
  password: Yup.string()
    .min(4, 'Must be longer than 4')
    .max(255, 'Must be shorter than 255')
    .required('Name is required'),
});

export const signUpValidationSchema = Yup.object().shape({
  username: Yup.string()
    .min(1, 'Must contain a character')
    .max(55, 'Must be shorter than 55')
    .required('Username is required'),
  email: Yup.string()
    .email('Must be a valid email adress')
    .max(255, 'Must be shorter than 255')
    .required('Email is required'),
  password: Yup.string()
    .min(4, 'Must be longer than 4')
    .max(255, 'Must be shorter than 255')
    .required('Password is required'),
  checked: Yup.boolean().required('Required'),
});

export const contactValidationSchema = Yup.object().shape({
  email: Yup.string()
    .email('Must be a valid email adress')
    .max(100, 'Must be shorter than 100')
    .required('Email is required'),
  subject: Yup.string()
    .required('subject is required')
    .max(100, 'Must be shorter than 100')
    .min(4, 'Must be longer than 4'),
  league: Yup.string()
    .required('league is required')
    .min(4, 'Must be longer than 4')
    .max(100, 'Must be shorter than 100'),
  question: Yup.string()
    .required('league is required')
    .min(4, 'Must be longer than 4')
    .max(500, 'Must be shorter than 500'),
});
