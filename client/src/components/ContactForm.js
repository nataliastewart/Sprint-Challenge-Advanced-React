import React, { useState } from "react";

const ContactForm = () => {
  const [formValues, setFormValues] = useState({
    fname: "",
    lname: "",
    id: Date.now(),
  });
  const onInputChange = (event) => {
    const inputThatChanged = event.target.name;
    const newValueForInput = event.target.value;
    setFormValues({
      ...formValues,
      [inputThatChanged]: newValueForInput,
    });
  };

  return (
    <div className="App">
      {/* Make a form to add friends! */}
      <form>
        <label htmlFor="firstName">
          first name:
          <input
            placeholder="Natalia"
            id="firstName"
            onChange={onInputChange}
            value={formValues.fnameValue}
            name="firstName"
            type="text"
          />
        </label>

        <label htmlFor="lastName">
          last name:
          <input
            placeholder="Stewart"
            id="lastName"
            onChange={onInputChange}
            value={formValues.fnameValue}
            name="lastName"
            type="text"
          />
        </label>
      </form>
    </div>
  );
};

export default ContactForm;
