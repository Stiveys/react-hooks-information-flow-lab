import "@testing-library/jest-dom";
import { render, screen, fireEvent } from "@testing-library/react";
import Filter from "../components/Filter"; 

test("displays the <select> element", () => {
  const onCategoryChange = jest.fn();
  render(<Filter onCategoryChange={onCategoryChange} />);
  const select = screen.getByRole("combobox");
  expect(select).toBeInTheDocument();
});