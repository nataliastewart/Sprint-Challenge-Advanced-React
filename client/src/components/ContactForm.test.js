import React from "react";
import { render } from "@testing-library/react";
import ContactForm from "./ContactForm";
import "@testing-library/jest-dom/extend-expect";

test("inputs are visible", () => {
  const { getByLabelText } = render(<ContactForm />);

  const firstNameInput = getByLabelText(/first name/i);
  expect(firstNameInput).toBeVisible();
  const lastNameInput = getByLabelText(/last name/i);
  expect(lastNameInput).toBeVisible();
});

test("placeholders are visible", () => {
  const { getByPlaceholderText } = render(<ContactForm />);

  const firstNamePlaceHolder = getByPlaceholderText(/Natalia/i);
  expect(firstNamePlaceHolder).toBeVisible();
});
