import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import AboutCard from '/src/components/about/AboutCard.jsx'

describe("AboutCard Component that is part of About Component", () => {
    it("renders AboutCard content", () => {
        render(<AboutCard/>)
        expect(screen.getByTestId("aboutParagraph"))
    })
})