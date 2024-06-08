import * as Yup from "yup";

export const enquiryFormValidationShema = Yup.object({
    name: Yup.string().required("Name is required.").min(3,"Name should be atleast 3 chars."),
    email: Yup.string().email().required("Email is required."),
    contact: Yup.string().required("Contact is required.").min(10, "Contact No should be 10 digit.").max(10, "Contact No should be 10 digit."),
    relatedTo: Yup.string().required("Related To is required."),
});
