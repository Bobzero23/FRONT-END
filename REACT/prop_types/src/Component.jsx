import React from "react";

const Component = ({ name, age }) => {
  return `In 5 years ${name} will be ${age}`;
};

Component.propTypes = {
  name: PropTypes.string,
  age: PropTypes.number.isRequired,
};

export default Component;
