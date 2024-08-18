import { useFormik } from "formik";
import React from "react";
import { basicFormSchema } from "./schemas/BasicFormSchema";

const onSubmit = () => {
  console.log("submitted");
};

const BasicForm = () => {
  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues: {
        email: "",
        age: "",
        password: "",
        confirmPassword: "",
      },
      validationSchema: basicFormSchema,
      onSubmit,
    });

  console.log(errors);

  return (
    <div>
      <form
        onSubmit={handleSubmit}
        autoComplete="off"
        style={{
          display: "flex",
          flexDirection: "column",
          textAlign: "left",
          gap: "10px",
        }}
      >
        <label htmlFor="email">email</label>
        <input
          style={{ height: "30px" }}
          value={values.email}
          onChange={handleChange}
          onBlur={handleBlur}
          type="email"
          id="email"
          placeholder="Enter your email"
          className={errors.email && touched.email ? "input-error" : ""}
        />
        <label htmlFor="age">age</label>
        <input
          style={{ height: "30px" }}
          value={values.age}
          onChange={handleChange}
          onBlur={handleBlur}
          type="number"
          id="age"
          placeholder="Enter your age"
          className={errors.age && touched.age ? "input-error" : ""}
        />
        <label htmlFor="password">password</label>
        <input
          style={{ height: "30px" }}
          value={values.password}
          onChange={handleChange}
          onBlur={handleBlur}
          type="password"
          id="password"
          placeholder="Enter your password"
          className={errors.password && touched.password ? "input-error" : ""}
        />
        <label htmlFor="confirmPassword">confirm password</label>
        <input
          style={{ height: "30px" }}
          value={values.confirmPassword}
          onChange={handleChange}
          onBlur={handleBlur}
          type="password"
          id="confirmPassword"
          placeholder="Confrim your password"
          className={
            errors.confirmPassword && touched.confirmPassword
              ? "input-error"
              : ""
          }
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default BasicForm;
