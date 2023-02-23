import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";
import { BrowserRouter } from "react-router-dom";

test("renders homepage", () => {
  render(<BrowserRouter><App /></BrowserRouter>);
  const label = screen.getByText("This is the homepage");
  expect(label).toBeInTheDocument();
});
