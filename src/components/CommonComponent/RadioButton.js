import { FormControlLabel, Radio, RadioGroup } from "@mui/material";
import { useField, useFormikContext } from "formik";

export const Designation = (props) => {
  const { setFieldValue } = useFormikContext();
  const [field] = useField(props.name);

  const handleChange = (evt) => {
    const { value } = evt.target;
    setFieldValue(props.name, value);
  };

  const configSelect = {
    ...field,
    onChange: handleChange,
  };
  return (
    <RadioGroup row name="row-radio-buttons-group" {...configSelect}>
      <FormControlLabel
        value="Candidate Member"
        control={<Radio />}
        label="Candidate Member"
      />
      <FormControlLabel
        value="CRA,P,App"
        control={<Radio />}
        label="CRA.P.App"
      />
      <FormControlLabel
        value="AACI,P,App"
        control={<Radio />}
        label="AACI.P.App"
      />
    </RadioGroup>
  );
};
export const CoDesignation = (props) => {
  const { setFieldValue } = useFormikContext();
  const [field] = useField(props.name);

  const handleChange = (evt) => {
    const { value } = evt.target;
    setFieldValue(props.name, value);
  };

  const configSelect = {
    ...field,
    onChange: handleChange,
  };
  return (
    <RadioGroup row sx={{ alignItems: "center" }} {...configSelect}>
      <label>
        <b> Designation </b>{" "}
      </label>
      <FormControlLabel
        value="CRA,P,App"
        control={<Radio />}
        label="CRA.P.App"
        sx={{ ml: 1 }}
      />
      <FormControlLabel
        value="AACI,P,App"
        control={<Radio />}
        label="AACI.P.App"
      />
    </RadioGroup>
  );
};
