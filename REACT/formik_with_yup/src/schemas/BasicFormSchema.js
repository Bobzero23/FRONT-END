import * as yup from "yup";

const passwordRules =
  "^(?=.*[a-z])(?=.*[A-Z])(?=.*d)(?=.*[@$!%*?&])[A-Za-zd@$!%*?&]{8,}$";

export const basicFormSchema = yup.object().shape({
  email: yup
    .string()
    .email("Please enter valid emial")
    .required("email is required"),
  age: yup.number().positive().required("age is required"),
  password: yup
    .string()
    .min(5)
    .matches(passwordRules, "please create a strong password")
    .required("password is required"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password"), null], "passwords must match")
    .required("password required"),
});
