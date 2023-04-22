import { render, screen } from "@testing-library/react";
import App from "./App";

describe("App", () => {
  test("Count button is present", () => {
    render(<App />);

    expect(screen.getByRole("button", { name: /count/i })).toBeInTheDocument();
  });
});
