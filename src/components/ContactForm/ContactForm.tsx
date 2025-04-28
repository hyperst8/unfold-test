"use client";
import React, { useState } from "react";
import styles from "./contactForm.module.css";

interface FormData {
  firstName: string;
  lastName: string;
  phoneNumber: string | number;
  receiveNewsletter: boolean;
}

const ContactForm = () => {
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    phoneNumber: "",
    receiveNewsletter: false,
  });

  const [errors, setErrors] = useState<Partial<FormData>>({});
  const [successMessage, setSuccessMessage] = useState<string | null>(null);

  const validate = (): boolean => {
    const newErrors: Partial<FormData> = {};

    if (!formData.firstName.trim()) {
      newErrors.firstName = "First name is required.";
    }

    if (!formData.lastName.trim()) {
      newErrors.lastName = "Last name is required.";
    }

    if (formData.phoneNumber === "" || formData.phoneNumber === null) {
      newErrors.phoneNumber = "Phone number is required.";
    } else if (!/^\d{8}$/.test(String(formData.phoneNumber))) {
      newErrors.phoneNumber = "Phone number must be 8 digits.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLInputElement>
  ) => {
    const { name, value, type, checked } = event.target;

    // Update the form data
    setFormData((prev) => ({
      ...prev,
      [name]:
        type === "checkbox" ? checked : name === "phoneNumber" ? +value : value,
    }));

    // Clear the error for the field being edited
    setErrors((prev) => ({
      ...prev,
      [name]: undefined,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSuccessMessage(null);

    if (validate()) {
      setSuccessMessage("Form submitted successfully!");
      setFormData({
        firstName: "",
        lastName: "",
        phoneNumber: "",
        receiveNewsletter: false,
      });
      setErrors({});
    }
  };

  return (
    <>
      <form
        onSubmit={handleSubmit}
        aria-labelledby="contact-form-title"
        className={styles.formContainer}
      >
        <h2 id="contact-form-title">Contact Form</h2>

        {/* First Name */}
        <div className={styles.formGroup}>
          <label htmlFor="firstName">First Name</label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            aria-invalid={!!errors.firstName}
            aria-describedby="firstName-error"
          />
          {errors.firstName && (
            <p id="firstName-error" className={styles.errorText}>
              {errors.firstName}
            </p>
          )}
        </div>

        {/* Last Name */}
        <div className={styles.formGroup}>
          <label htmlFor="lastName">Last Name</label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            aria-invalid={!!errors.lastName}
            aria-describedby="lastName-error"
          />
          {errors.lastName && (
            <p id="lastName-error" className={styles.errorText}>
              {errors.lastName}
            </p>
          )}
        </div>

        {/* Phone Number */}
        <div className={styles.formGroup}>
          <label htmlFor="phoneNumber">Phone Number</label>
          <input
            type="number"
            id="phoneNumber"
            name="phoneNumber"
            value={formData.phoneNumber === "" ? "" : formData.phoneNumber} // Handle empty state
            onChange={handleChange}
            aria-invalid={!!errors.phoneNumber}
            aria-describedby="phoneNumber-error"
          />
          {errors.phoneNumber && (
            <p id="phoneNumber-error" className={styles.errorText}>
              {errors.phoneNumber}
            </p>
          )}
        </div>

        {/* Receive Newsletter */}
        <div className={styles.formGroupCheckbox}>
          <label htmlFor="receiveNewsletter">Receive newsletter?</label>
          <input
            type="checkbox"
            id="receiveNewsletter"
            name="receiveNewsletter"
            checked={formData.receiveNewsletter}
            onChange={handleChange}
          />
        </div>

        {/* Submit Button */}
        <button type="submit" className={styles.submitButton}>
          Save changes
        </button>

        {/* Success Message */}
      </form>
      {successMessage && (
        <p className={styles.successMessage}>{successMessage}</p>
      )}
    </>
  );
};

export default ContactForm;
