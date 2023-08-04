import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [errors, setErrors] = useState({
    name: '',
    email: ''
  });

  const [submitted, setSubmitted] = useState(false)

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleBlur = (event) => {
    const { name, value } = event.target;
    if (value.trim() === '') {
      setErrors({
        ...errors,
        [name]: 'This field is required'
      });
    } else {
      setErrors({
        ...errors,
        [name]: ''
      });
    }
  };

  const validateEmail = (email) => {
    const pattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return pattern.test(email);
  };

  const handleEmailBlur = () => {
    const { email } = formData;
    if (email.trim() !== '' && !validateEmail(email)) {
      setErrors({
        ...errors,
        email: 'Invalid email address'
      });
    } else {
      setErrors({
        ...errors,
        email: ''
      });
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Form submitted:', formData);
    setSubmitted(true);
  };

  return (
    <div>
      <h1>Contact</h1>
      {submitted ? (
        <div className="alert alert-success" role="alert">
          Thank you! Your form has been submitted.
        </div>
      ) : (
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input
            type="text"
            className="form-control"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            onBlur={handleBlur}
            required
          />
          {errors.name && <p className="text-danger">{errors.name}</p>}
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            onBlur={handleEmailBlur}
            required
          />
          {errors.email && <p className="text-danger">{errors.email}</p>}
        </div>
        <div className="mb-3">
          <label htmlFor="message" className="form-label">
            Message
          </label>
          <textarea
            className="form-control"
            id="message"
            name="message"
            rows="4"
            value={formData.message}
            onChange={handleInputChange}
            onBlur={handleBlur}
            required
          />
          {errors.message && <p className="text-danger">{errors.message}</p>}
        </div>
        <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      )}
    </div>
  );
};

export default Contact;
