import * as Yup from "yup";

export const validationSchema = Yup.object().shape({
  email: Yup.string()
    .email("Must be a valid email adress")
    .max(255, "Must be shorter than 255")
    .required("Email is required"),
  password: Yup.string()
    .min(4, "Must be longer than 4")
    .max(255, "Must be shorter than 255")
    .required("Name is required")
});

export const signUpValidationSchema = Yup.object().shape({
  username: Yup.string()
    .min(1, "Must contain a character")
    .max(55, "Must be shorter than 55")
    .required("Username is required"),
  email: Yup.string()
    .email("Must be a valid email adress")
    .max(255, "Must be shorter than 255")
    .required("Email is required"),
  password: Yup.string()
    .min(4, "Must be longer than 4")
    .max(255, "Must be shorter than 255")
    .required("Password is required"),
  checked: Yup.boolean().required("Required")
});

export const contactValidationSchema = Yup.object().shape({
  email: Yup.string()
    .email("Must be a valid email adress")
    .max(100, "Must be shorter than 100")
    .required("Email is required"),
  name: Yup.string()
    .required("name is required")
    .max(100, "Must be shorter than 100")
    .min(1, "Must be longer than 1"),
  question: Yup.string()
    .required("league is required")
    .min(4, "Must be longer than 4")
    .max(500, "Must be shorter than 3000")
});

export const plansValidationSchema = Yup.object().shape({
  sportType: Yup.string().required("Type is required")
});

export const forgotPasswordValidationSchema = Yup.object().shape({
  email: Yup.string()
    .email("Must be a valid email adress")
    .max(100, "Must be shorter than 100")
    .required("Email is required")
});

export const passwordResetValidationSchema = Yup.object().shape({
  password: Yup.string()
    .min(4, "Must be longer than 4")
    .max(20, "Must be shorter than 20")
    .required("Name is required"),
  password_confirmation: Yup.string()
    .min(4, "Must be longer than 4")
    .max(20, "Must be shorter than 20")
    .required("Name is required"),
  email: Yup.string()
    .email("Must be a valid email adress")
    .max(100, "Must be shorter than 100")
    .required("Email is required")
});
