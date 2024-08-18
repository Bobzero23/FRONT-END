import React from "react";

const AdvancedForm = () => {
  return (
    <div>
      {" "}
      <div>
        <form autoComplete="off" style={{ display: "flex", gap: "10px" }}>
          <label htmlFor="email">Email</label>
          <input type="email" id="email" placeholder="Enter your email" />
        </form>
      </div>
    </div>
  );
};

export default AdvancedForm;
