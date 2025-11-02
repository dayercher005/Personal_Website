import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import Header from "/src/components/about/Header.jsx";

describe("Title component of About Component", () => {
  it("renders correct Title text", () => {
    render(<Header />);
    expect(screen.getByRole("heading", { name: "About me" }));
  });
});
