import "@testing-library/jest-dom";
import { render, screen, fireEvent } from "@testing-library/react";
import Header from "../components/Header"; 

test("displays the toggle button", () => {
  const onDarkModeClick = jest.fn();
  render(<Header onDarkModeClick={onDarkModeClick} />);
  const button = screen.getByText("Toggle Dark Mode");
  expect(button).toBeInTheDocument();
});