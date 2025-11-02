import { describe, it, expect } from "vitest";
import { render } from "@testing-library/react";
import About from "/src/components/about/About.jsx";

describe("About component", () => {
  it("renders About Section", () => {
    const { container } = render(<About />);
    expect(container).toMatchSnapshot();
  });
});
