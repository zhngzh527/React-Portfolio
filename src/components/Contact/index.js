import React, { useState } from "react";
import { validateEmail } from "../../utils/helpers";

function ContactForm() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errorMessage, setErrorMessage] = useState("");
  const { name, email, message } = formState;

  function handleSubmit(e) {
    e.preventDefault();

    if (!errorMessage) {
      setFormState({ ...formState, [e.target.name]: e.target.value });
      console.log("Form", formState);
    }
  }

  return (
    <section>
      <h1 data-testid="h1tag">Reach me</h1>
      <a href="mailto:zhongcheng9114@gmail.com">@zhongcheng9114@gmail.com</a>

    </section>
  );
}

export default ContactForm;