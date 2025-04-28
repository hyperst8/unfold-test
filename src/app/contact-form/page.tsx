import React from "react";
import BackButton from "@/components/BackButton/BackButton";
import ContactForm from "@/components/ContactForm/ContactForm";

const ContactPage = () => {
  return (
    <div className="titlePage">
      <div className="titleContainer">
        <BackButton />
        <h1>Contact us</h1>
      </div>

      <ContactForm />
    </div>
  );
};

export default ContactPage;
