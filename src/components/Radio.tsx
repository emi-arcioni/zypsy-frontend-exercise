import React from "react";

function Radio({
  children,
  checked = false,
}: {
  children: React.ReactNode;
  checked?: boolean;
}) {
  return (
    <label className="flex items-center space-x-1">
      <input
        type="radio"
        name="category"
        value="all"
        className="form-radio"
        defaultChecked={checked}
      />
      <span>{children}</span>
    </label>
  );
}

export default Radio;
