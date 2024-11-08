import React from "react";

function Radio({
  children,
  checked = false,
  onChange,
}: {
  children: React.ReactNode;
  checked?: boolean;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
}) {
  return (
    <label className="flex items-center space-x-1 cursor-pointer">
      <input
        type="radio"
        name="category"
        value="all"
        className="form-radio"
        defaultChecked={checked}
        onChange={onChange}
      />
      <span>{children}</span>
    </label>
  );
}

export default Radio;
