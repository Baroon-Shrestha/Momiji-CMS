import React from "react";
import ContactMain from "../Components/ContactComponents/ContactMain";
import GetInTouch from "../Components/HomeComponents/GetInTouch";
import Form from "../Components/ContactComponents/Form";

export default function Contact() {
  return (
    <div>
      <ContactMain />
      <Form />
      <div className="my-12">
        <GetInTouch />
      </div>
    </div>
  );
}
