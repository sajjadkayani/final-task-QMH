import React from "react";
import { ErrorMessage, useField } from "formik";
import TextField from "@mui/material/TextField";
import "../ContactUsForm/ContactForm.css";

function TextFieldWrapper(props) {
  const [field, meta] = useField(props);
  return (
    <div>
      <TextField
        fullWidth
        variant="filled"
        {...field}
        error={meta.touched && meta.error ? true : false}
        {...props}
      />
      {meta.touched && meta.error ? (
        <div className="error-box">
          <div>
            <ErrorMessage
              component="div"
              name={field.name}
              className="error-text"
            />
          </div>
          {/* <div sx={{ ml: 1 }}>
              <img src={infoerror} alt="info"></img>
            </div> */}
        </div>
      ) : null}
    </div>
  );
}

export default TextFieldWrapper;
