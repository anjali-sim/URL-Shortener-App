import React from "react";
import { Input } from "@/styled/Form.style";
import { ErrorStyle } from "@/styled/Error.style";

const Form: React.FC = ({ formik }) => {
  const { getFieldProps, touched, errors } = formik;

  return (
    <>
      <Input
        type="text"
        id="name"
        placeholder="Your name"
        {...getFieldProps("name")}
      />
      {touched.name && errors.name && <ErrorStyle>{errors.name}</ErrorStyle>}
      <Input
        type="email"
        id="email"
        placeholder="Your email address"
        {...getFieldProps("email")}
      />
      {touched.email && errors.email && <ErrorStyle>{errors.email}</ErrorStyle>}
      <Input
        type="password"
        id="password"
        placeholder="Your password"
        {...getFieldProps("password")}
      />
      {touched.password && errors.password && (
        <ErrorStyle>{errors.password}</ErrorStyle>
      )}
      <Input
        type="password"
        id="repassword"
        placeholder="Confirm password"
        {...getFieldProps("repassword")}
      />
      {touched.repassword && errors.repassword && (
        <ErrorStyle>{errors.repassword}</ErrorStyle>
      )}
    </>
  );
};

export default Form;
