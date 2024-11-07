import React from "react";

function Radio({ children }: { children: React.ReactNode }) {
  return (
    <label className="flex items-center space-x-1">
      <input
        type="radio"
        name="category"
        value="all"
        className="form-radio"
        defaultChecked
      />
      <span>{children}</span>
    </label>
  );
}

export default Radio;
