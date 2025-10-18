import { vi, describe, it, expect } from 'vitest'
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Panel from '/src/components/skills/Panel.jsx'

describe("Panel Component under Skills component", () => {
    it("should render the correct child elements if clicked", async () => {
        const isActive = vi.fn()
        const user = userEvent.setup()
        render(<Panel isActive = {isActive}/>)

        const button = screen.getByRole("button")

        await user.click(button)

        expect(isActive).toHaveBeenCalled()
    })

    it("should not render the child elements if not clicked", () => {
        const isActive = vi.fn()
        render(<Panel isActive={isActive} />)

        expect(isActive).not.toHaveBeenCalled()
    })
})