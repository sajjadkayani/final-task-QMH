import * as Yup from "yup";
export const FormValdion = Yup.object({
  member: Yup.string().required("Please enter your Member ship"),
  company: Yup.string().required("Please enter your Company Name"),
  email: Yup.string() .email("Email is invalid") .required("Please enter yor Email"),
  phone: Yup.number() .integer() .typeError("Please enter a Valid Phone No") .required("Please enter Phone No"),
  // other:Yup.string().required("Please enter your others"),
  license: Yup.string().required("Please enter your license no"),
  membership: Yup.string().required("Please enter your Membership Name"),
  unit: Yup.string().required("Please enter your House \ apt no"),
  street: Yup.string().required("Please enter your Name"),
  streetName: Yup.string().required("Please enter your StreetName"),
  city: Yup.string().required("Please enter your City"),
  age: Yup.string().required("Please enter your Age"),
  membershipend: Yup.string().required("Please enter your Membershipend"),
  licenseInfo:Yup.string().required("Please enter your licenseInfo"),
  designation: Yup.string().required("Please enter your Designation"),
  coDesignation: Yup.string().required("Please enter your CoDesignation"),
  province: Yup.string().required("Please enter your Province status"),
  name:Yup.string().required("Please enter your Name")
});
