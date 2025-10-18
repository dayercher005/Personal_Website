import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import Skills from "/src/components/skills/Skills.jsx"

describe("Skills Component", () => {

    it("renders heading in Skills component", () => {
        render(<Skills/>)
        expect(screen.getByRole("heading", {name: "Skills"}))
    })

    it("renders entire Skills component with its child components", () => {
        const { container } = render(<Skills/>)
        expect(container).toMatchSnapshot()
    })
})