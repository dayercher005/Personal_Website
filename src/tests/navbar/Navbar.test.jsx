import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import Navbar from "/src/components/navbar/Navbar.jsx";

describe("Navbar component", () => {
  it("renders correct heading of NavBar", () => {
    render(<Navbar />);
    expect(screen.getByRole("heading", { name: "Dayer Cher" }));
  });

  it("renders entire Navbar component and correct titles of Navbar", () => {
    const { container } = render(<Navbar />);
    expect(container).toMatchSnapshot();
  });
});
