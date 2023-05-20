import React, { FC, HTMLAttributes } from "react";

export interface BadgeFieldProps extends HTMLAttributes<HTMLLabelElement> {
}

const BadgeField: FC<BadgeFieldProps> = ({ 
  className="bg-red", 
  children, 
  ...args 
}) => {
  return (
    <label
      className={`nc-Label ${className} rounded-full p-2`}
      {...args}
    >
      {children}
    </label>
  );
};

export default BadgeField;
