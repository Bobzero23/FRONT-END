import { useFormik } from "formik";
import React from "react";

const BasicForm = () => {
  const { values, handleBlur, handleChange } = useFormik({
    initialValues: {
      email: "",
      age: "",
      password: "",
      confirmPassword: "",
    },
  });

  return (
    <div>
      <form
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
        />
        <label htmlFor="password">password</label>
        <input
          style={{ height: "30px" }}
          value={values.password}
          onChange={handleChange}
          type="password"
          id="password"
          placeholder="Enter your password"
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
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default BasicForm;
