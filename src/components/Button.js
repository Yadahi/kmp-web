import React from "react";
import { useNavigate } from "react-router-dom";

export const Button = ({ path = "/", label, color = "secondary" }) => {
  let navigate = useNavigate();
  return (
    <button
      className={`button button--${color}`}
      onClick={() => {
        navigate("/o-nas");
      }}
    >
      {label}
    </button>
  );
};
