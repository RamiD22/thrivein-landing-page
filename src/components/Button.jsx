import React from "react";

const Button = ({ styles }) => (
  <button type="button"
  onClick={() => window.open(url, '_blank')}  className={`py-4 px-6 font-poppins font-medium text-[18px] text-primary bg-blue-gradient rounded-[10px] outline-none ${styles}`}>
    Join the waitlist!
  </button>
);

export default Button;