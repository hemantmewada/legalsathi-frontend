import React, { useEffect } from "react";
import { useFormik } from "formik";
import { enquiryFormValidationShema } from "../schema/enquiryFormValidationShema";
import enquiryAPI from "../service/enquieryAPI";
import Loader from "./Loader";


const initialValues = {
    name: "",
    email: "",
    contact: "",
    relatedTo: "",
    enquiryFor: ""
};

const Form = ({ pageName }) => {
  const {loading, api} = enquiryAPI();
  const {
    errors,
    values,
    touched,
    handleBlur,
    handleReset,
    handleChange,
    handleSubmit,
    setValues,
  } = useFormik({
    initialValues,
    validationSchema: enquiryFormValidationShema,
    onSubmit: (values, actions) => {
      // console.log(values);
      api(values, actions);
    },
  });
  useEffect(() => {
    setValues({ ...values, enquiryFor: pageName });
  }, [pageName])
  
  return (
    <form className="book-form" onSubmit={handleSubmit}>
      <h3 className="form-title"><span className="form-heading">{pageName}</span> Enquiry</h3>
      <div className="row align-items-center">
        <div className="mb-3 mb-md-1 col-md-12">
          <input
            value={values.name}
            onChange={handleChange}
            onBlur={handleBlur}
            name="name"
            type="text"
            className="form-control"
            placeholder="Name"
          />
          {touched.name && errors.name && <p className="text-red font-size-14">{errors.name}</p>}
        </div>
        <div className="mb-3 mb-md-1 col-md-12">
          <input
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
            name="email"
            type="email"
            className="form-control"
            placeholder="Email"
          />
          {touched.email && errors.email && <p className="text-red font-size-14">{errors.email}</p>}
        </div>
        <div className="mb-3 mb-md-1 col-md-12">
          <input
            value={values.contact}
            onChange={handleChange}
            onBlur={handleBlur}
            name="contact"
            type="number"
            className="form-control"
            placeholder="Contact No"
          />
          {touched.contact && errors.contact && <p className="text-red font-size-14">{errors.contact}</p>}
        </div>
        <div className="mb-3 mb-md-1 col-md-12">
          <select onChange={handleChange} onBlur={handleBlur} name="relatedTo" className="form-control">
            <option value="">Related To</option>
            <option value="Lawyer">Lawyer</option>
            <option value="Chartered Accountant">Chartered Accountant</option>
            <option value="Company Secretary">Company Secretary</option>
            <option value="Not sure">Not sure</option>
          </select>
          {touched.relatedTo && errors.relatedTo && <p className="text-red font-size-14">{errors.relatedTo}</p>}
        </div>
        <input type="hidden" name="enquiryFor" value={values.enquiryFor} />
        <div className="col-md-12">
          {
            loading ? (
              <Loader />
            ) : (
              <input
                type="submit"
                value="GET A QUOTE"
                className="btn btn-primary btn-block py-3 text-white"
              />
            )
          }
        </div>
      </div>
    </form>
  );
};

export default Form;
