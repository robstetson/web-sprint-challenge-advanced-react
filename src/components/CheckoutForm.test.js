import React from "react";
import MutationObserver from "mutationobserver-shim";
import { render, screen } from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";
import userEvent from "@testing-library/user-event";

// Write up the two tests here and make sure they are testing what the title shows

test("renders without errors", () => {
  render(<CheckoutForm />);
});

test("shows success message on submit with form details", () => {
  render(<CheckoutForm />);
  const firstName = screen.getByLabelText(/First Name:/i);
  const lastName = screen.getByLabelText(/Last Name:/i);
  const address = screen.getByLabelText(/Address:/i);
  const city = screen.getByLabelText(/City:/i);
  const state = screen.getByLabelText(/State:/i);
  const zip = screen.getByLabelText(/Zip:/i);
  const button = screen.getByRole("button");

  userEvent.type(firstName, "Robert");
  userEvent.type(lastName, "Stetson");
  userEvent.type(address, "Littlefield St");
  userEvent.type(city, "Pawtucket");
  userEvent.type(state, "RI");
  userEvent.type(zip, "02861");
  userEvent.click(button);

  const successMessage = document.querySelector(
    "[data-testid = 'successMessage']"
  );

  expect(successMessage).toHaveTextContent(/Robert/);
  expect(successMessage).toHaveTextContent(/Stetson/);
  expect(successMessage).toHaveTextContent(/Littlefield St/);
  expect(successMessage).toHaveTextContent(/Pawtucket/);
  expect(successMessage).toHaveTextContent(/RI/);
  expect(successMessage).toHaveTextContent(/02861/);
});
