"use client";

import { Formik } from 'formik';
import AppData from "@data/app.json";

const ContactForm = ( { subtitleOffset } ) => {
  return (
    <>
        {/* contact form */}
        <Formik
        initialValues = {{ email: '', name: '', tel: '', budget: '', message: '' }}
        validate = { values => {
            const errors = {};
            if (!values.email) {
                errors.email = 'Required';
            } else if (
                !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
            ) {
                errors.email = 'Invalid email address';
            }
            return errors;
        }}
        onSubmit = {( values, { setSubmitting } ) => {
            const form = document.getElementById("contactForm");
            const status = document.getElementById("contactFormStatus");
            const data = new FormData();

            data.append('name', values.name);
            data.append('email', values.email);
            data.append('tel', values.tel);
            data.append('budget', values.budget);
            data.append('message', values.message);

            fetch(form.action, {
                method: 'POST',
                body: data,
                headers: {
                    'Accept': 'application/json'
                }
            }).then(response => {
                if (response.ok) {
                    status.innerHTML = "<h5>Thanks, your message is sent successfully.</h5>";
                    form.reset()
                } else {
                    response.json().then(data => {
                        if (Object.hasOwn(data, 'errors')) {
                            status.innerHTML = data["errors"].map(error => error["message"]).join(", ")
                        } else {
                            status.innerHTML = "<h5>Oops! There was a problem submitting your form</h5>"
                        }
                    })
                }
            }).catch(error => {
                status.innerHTML = "<h5>Oops! There was a problem submitting your form</h5>"
            });

            setSubmitting(false);
        }}
        >
        {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
            isSubmitting,
            /* and other goodies */
        }) => (
        <form onSubmit={handleSubmit} id="contactForm" action={AppData.settings.formspreeURL} className={subtitleOffset ? "mil-mt-suptitle-offset mil-mb-90 cform" : "mil-mb-90 cform"}>
            <div className="row">
                <div className="col-lg-6">

                    <div className="mil-input-frame mil-dark-input mil-up mil-mb-30">
                        <label className="mil-upper"><span>Full Name</span><span className="mil-required">*</span></label>
                        <input 
                            type="text" 
                            placeholder="Enter Your Name Here"
                            name="name" 
                            required="required" 
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.name} 
                        />
                    </div>

                </div>
                <div className="col-lg-6">

                    <div className="mil-input-frame mil-dark-input mil-up mil-mb-30">
                        <label className="mil-upper"><span>Email address</span><span className="mil-required">*</span></label>
                        <input 
                            type="email" 
                            placeholder="Enter Your Email Here"
                            name="email"
                            required="required"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.email} 
                        />
                    </div>

                </div>
                <div className="col-lg-6">

                    <div className="mil-input-frame mil-dark-input mil-up mil-mb-30">
                        <label className="mil-upper"><span>Phone</span><span className="mil-required">*</span></label>
                        <input 
                            type="tel" 
                            placeholder="Enter Your Phone Here"
                            name="tel"
                            required="required"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.tel} 
                        />
                    </div>

                </div>
                <div className="col-lg-6">

                    <div className="mil-input-frame mil-dark-input mil-up mil-mb-30">
                        <label className="mil-upper"><span>Budget</span><span className="mil-required">*</span></label>
                        <input 
                            type="text" 
                            placeholder="Enter Your Budget Here"
                            name="budget"
                            required="required"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.budget} 
                        />
                    </div>

                </div>
                <div className="col-lg-12">

                    <div className="mil-input-frame mil-dark-input mil-up mil-mb-30">
                        <label className="mil-upper"><span>Message</span><span className="mil-required">*</span></label>
                        <textarea 
                            placeholder="Enter Your Name Here"
                            name="message" 
                            required="required"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.message} 
                        />
                    </div>

                </div>
                <div className="col-lg-12">

                    <div className="mil-checbox-frame mil-dark-input mil-up mil-mb-30">
                        <input defaultChecked className="mil-checkbox" id="checkbox-1" type="checkbox" value="value" namge="agree" required />
                        <label htmlFor="checkbox-1" className="mil-text-sm">Accept the terms and conditions of personal data.</label>
                    </div>

                </div>
                <div className="col-lg-12">

                    <button type="submit" className="mil-button mil-up">Send Now</button>

                </div>
            </div>
            <div className="form-status alert-success mil-mb-90" id="contactFormStatus" style={{"display": "none"}} />
        </form>
        )}
        </Formik>
        {/* contact form end */}
    </>
  );
};
export default ContactForm;