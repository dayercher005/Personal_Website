import { describe, it, expect } from "vitest";
import { render } from "@testing-library/react";
import Project from "/src/components/projects/Project.jsx";

describe("Individual Project component of Projects Section", () => {
  it("renders Project component", () => {
    const { container } = render(<Project />);
    expect(container).toMatchSnapshot();
  });
});
