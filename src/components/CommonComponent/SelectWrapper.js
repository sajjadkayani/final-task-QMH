import React from "react";
import { useField, useFormikContext } from "formik";
import { MenuItem, Select } from "@mui/material";

const SelectWrapper = ({ name, options, ...otherProps }) => {
  const { setFieldValue } = useFormikContext();
  const [field, meta] = useField(name);

  const handleChange = (evt) => {
    const { value } = evt.target;
    setFieldValue(name, value);
  };

  const configSelect = {
    ...field,
    ...otherProps,
    onChange: handleChange,
  };
  return (
    <>
      <Select name={name} id={name} {...configSelect} variant="filled">
        {options.map((item, pos) => {
          return (
            <MenuItem key={pos} value={item}>
              {item}
            </MenuItem>
          );
        })}
      </Select>
      </>
  );
};

export default SelectWrapper;
