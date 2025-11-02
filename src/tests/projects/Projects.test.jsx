import { describe, it, expect } from "vitest";
import { render } from "@testing-library/react";
import Projects from "/src/components/projects/Projects.jsx";
import React from 'react'

describe("Project Section Component", () => {
  it("renders entire Project Section Component", () => {
    const { container } = render(<Projects />);
    expect(container).toMatchSnapshot();
  });
});
