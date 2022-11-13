import React, { useState } from "react";
import { Form, Formik } from "formik";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import "./ContactForm.css";
import TextFieldWrapper from "../CommonComponent/TextFieldWrapper";
import { CoDesignation, Designation } from "../CommonComponent/RadioButton";
import SelectWrapper from "../CommonComponent/SelectWrapper";
import TableWrapper from "../Table/TableWrapper";
import { Button } from "@mui/material";

function UpdateForm(props) {
  const [toggle, setToggle] = useState(true);
  const [data, setdata] = useState([]);
  const {
    member,
    company,
    email,
    phone,
    other,
    license,
    membership,
    unit,
    street,
    streetName,
    city,
    age,
    membershipend,
    licenseInfo,
    designation,
    coDesignation,
    province,
  } = props.updateData;

  const handleSubmit = (values) => {
    console.log(values);
    props.update(values);
    props.setToggle(true);
  };

  return (
    <>
      {toggle ? (
        <div className="main">
          <Formik
            initialValues={{
              member: member,
              company: company,
              email: email,
              phone: phone,
              other: other,
              license: license,
              membership: membership,
              unit: unit,
              street: street,
              streetName: streetName,
              city: city,
              age: age,
              membershipend: membershipend,
              licenseInfo: licenseInfo,
              designation: designation,
              coDesignation: coDesignation,
              province: province,
            }}
            onSubmit={(values) => handleSubmit(values)}
            //   validationSchema={createShopValidation}
          >
            {() => (
              <Form>
                <div className="Container">
                  <div className="heading">
                    <b> APPRAISER</b>
                  </div>
                  <Box sx={{ px: 3, py: 5, mt: 3 }} className="grid-layout">
                    <TextFieldWrapper
                      label="AIC Member Name"
                      name="member"
                      type="text"
                    />
                    <TextFieldWrapper
                      label="Company"
                      name="company"
                      type="text"
                    />
                    <TextFieldWrapper label="Email" name="email" type="text" />
                    <TextFieldWrapper label="Phone" name="phone" type="text" />
                    <TextFieldWrapper label="Other" name="other" type="text" />
                    <TextFieldWrapper
                      label="license info(where applicable)"
                      name="license"
                      type="text"
                    />
                    <TextFieldWrapper
                      label="Membership"
                      name="membership"
                      type="text"
                    />

                    <div className="grid-span-two">
                      <label>
                        <b> Designation </b>{" "}
                      </label>
                      <Designation name="designation" />
                    </div>
                  </Box>
                </div>
                <div className="Container">
                  <Box
                    className="flex-layout"
                    sx={{
                      position: "absolute",
                      top: { xs: "-3%", sm: "-15%" },
                    }}
                  >
                    <div className="text">
                      <b> APPRAISER ADDRESSES</b>
                    </div>
                    <div className="text none" id="icon">
                      <b> CLEAR ADDRESSES </b>
                    </div>
                    <div style={{ width: "100%" }}>
                      <input
                        className="search none"
                        type="text"
                        placeholder="SEARCH"
                      />
                    </div>
                  </Box>
                  <Box sx={{ px: 3, py: 5 }} className="appraiser-grid-layout">
                    <TextFieldWrapper
                      label="Unit/Apt /Suit"
                      name="unit"
                      type="text"
                    />
                    <TextFieldWrapper
                      label="Street#"
                      name="street"
                      type="text"
                    />
                    <TextFieldWrapper
                      label="Street Name"
                      name="streetName"
                      type="text"
                    />
                    <TextFieldWrapper label="City" name="city" type="text" />
                    <FormControl fullWidth>
                      <InputLabel id="demo-simple-select-label">
                        Province
                      </InputLabel>
                      <SelectWrapper name="province" options={["YES", "NO"]} />
                    </FormControl>
                    <TextFieldWrapper label="Age" name="age" type="text" />
                  </Box>
                </div>
                <div className="Container">
                  <div className="heading">
                    <b>CO-SIGINING AIC APPRAISER (IF APPLICABLE)</b>
                  </div>
                  <Box sx={{ px: 3, py: 5, mt: 5 }} className="grid-layout">
                    <TextFieldWrapper label="Name" name="name" type="text" />
                    <TextFieldWrapper
                      label="Membership#"
                      name="membershipend"
                      type="text"
                    />
                    <TextFieldWrapper
                      label="License Info (where applicable)"
                      name="licenseInfo"
                      type="text"
                    />
                    <div className="grid-span-two">
                      <CoDesignation name="coDesignation" />
                    </div>
                  </Box>
                </div>
                <div className="submit-btn">
                  <Button type="submit" variant="contained">
                    UPDATE
                  </Button>
                </div>
              </Form>
            )}
          </Formik>
        </div>
      ) : (
        <TableWrapper data={data} />
      )}
    </>
  );
}

export default UpdateForm;
