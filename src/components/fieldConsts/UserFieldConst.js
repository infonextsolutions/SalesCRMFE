import { TEXT } from "../utils/Const.js";

export const newUserConst = [
  {
    name: "name",
    label: "Name",
    dataKey: "name",
    type: TEXT,
    isRequired: true,
    requiredErrorMessage: "Please enter your name.",
  },
  {
    name: "phoneNumber",
    label: "Mobile Number",
    dataKey: "PhoneNumber",
    type: TEXT,
    isRequired: true,
    requiredErrorMessage: "Please enter your phone number.",
    regex: /^(\+\d{1,2}\s?)?1?\-?\.?\s?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/,
    regexErrorMessage: "Invalid phone number",
  },
  {
    name: "email",
    label: "Email",
    dataKey: "email",
    type: TEXT,
    isRequired: true,
    requiredErrorMessage: "Please enter your email.",
    regex: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/,
    regexErrorMessage: "Invalid Email",
  },
  {
    name: "companyName",
    label: "Company Name",
    dataKey: "companyName",
    type: TEXT,
    isRequired: true,
    requiredErrorMessage: "Please enter your name.",
  },
  {
    name: "companyAddress",
    label: "Company Address",
    dataKey: "companyAddress",
    type: TEXT,
    isRequired: true,
    requiredErrorMessage: "Please enter your address.",
  },

  {
    name: "city",
    label: "city",
    dataKey: "city",
    type: "select",
    isRequired: true,
    requiredErrorMessage: "Please select a City.",
  },
  {
    name: "state",
    label: "state",
    dataKey: "state",
    type: "select",
    isRequired: true,
    requiredErrorMessage: "Please select a State.",
  },
  {
    name: "sectorNumber",
    label: "Locations Allowed",
    dataKey: "location",
    type: "select",
    isRequired: true,
    isMulti: true,
    requiredErrorMessage: "Please select a Locations.",
  },
];

export const newAgentConst = [
  {
    name: "name",
    label: "Name",
    dataKey: "name",
    type: TEXT,
    isRequired: true,
    requiredErrorMessage: "Please enter your name.",
  },
  {
    name: "phoneNumber",
    label: "Mobile Number",
    dataKey: "PhoneNumber",
    type: TEXT,
    isRequired: true,
    requiredErrorMessage: "Please enter your phone number.",
    regex: /^(\+\d{1,2}\s?)?1?\-?\.?\s?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/,
    regexErrorMessage: "Invalid phone number",
  },
  {
    name: "email",
    label: "Email",
    dataKey: "email",
    type: TEXT,
    isRequired: true,
    requiredErrorMessage: "Please enter your email.",
    regex: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/,
    regexErrorMessage: "Invalid Email",
  },
  {
    name: "companyName",
    label: "Company Name",
    dataKey: "companyName",
    type: TEXT,
    isRequired: true,
    requiredErrorMessage: "Please enter your name.",
  },
  {
    name: "companyAddress",
    label: "Company Address",
    dataKey: "companyAddress",
    type: TEXT,
    isRequired: true,
    requiredErrorMessage: "Please enter your address.",
  },

  {
    name: "city",
    label: "city",
    dataKey: "city",
    type: "select",
    isRequired: true,
    requiredErrorMessage: "Please select a City.",
  },
  {
    name: "state",
    label: "state",
    dataKey: "state",
    type: "select",
    isRequired: true,
    requiredErrorMessage: "Please select a State.",
  },
  {
    name: "sectorNumber",
    label: "Request for Locations",
    dataKey: "location",
    type: "select",
    isRequired: true,
    isMulti: true,
    requiredErrorMessage: "Please select a Locations.",
  },
];

export const editUserConst = [
  {
    name: "name",
    label: "Name",
    dataKey: "name",
    type: TEXT,
    isRequired: true,
    requiredErrorMessage: "Please enter your name.",
  },
  {
    name: "phoneNumber",
    label: "Mobile Number",
    dataKey: "PhoneNumber",
    type: TEXT,
    isRequired: true,
    requiredErrorMessage: "Please enter your phone number.",
    regex: /^(\+\d{1,2}\s?)?1?\-?\.?\s?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/,
    regexErrorMessage: "Invalid phone number",
  },
  {
    name: "email",
    label: "Email",
    dataKey: "email",
    type: TEXT,
    isRequired: true,
    requiredErrorMessage: "Please enter your email.",
    regex: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/,
    regexErrorMessage: "Invalid Email",
  },
  {
    name: "companyName",
    label: "Company Name",
    dataKey: "companyName",
    type: TEXT,
    isRequired: true,
    requiredErrorMessage: "Please enter your name.",
  },
  {
    name: "companyAddress",
    label: "Company Address",
    dataKey: "companyAddress",
    type: TEXT,
    isRequired: true,
    requiredErrorMessage: "Please enter your address.",
  },

  {
    name: "city",
    label: "city",
    dataKey: "city",
    type: "select",
    isRequired: true,
    requiredErrorMessage: "Please select a City.",
  },
  {
    name: "state",
    label: "state",
    dataKey: "state",
    type: "select",
    isRequired: true,
    requiredErrorMessage: "Please select a State.",
  },
  {
    name: "sectorNumber",
    label: "Locations Allowed",
    dataKey: "location",
    type: "select",
    isMulti: true,
    isRequired: true,
    requiredErrorMessage: "Please select a Locations.",
  },
  {
    name: "status",
    label: "Status",
    dataKey: "status",
    type: "select",
    isRequired: true,
    requiredErrorMessage: "Please select a Status.",
  },
];

export const editCustomerConst = [];