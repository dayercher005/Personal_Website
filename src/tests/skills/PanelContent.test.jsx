import { describe, it, expect } from 'vitest'
import { render } from "@testing-library/react";
import PanelContent from '/src/components/skills/PanelContent.jsx'

describe("PanelContent component under Skills component", () => {
    it("should render respective Panel Content based on user Click", () => {
        const { container } = render(<PanelContent/>)
        expect(container).toMatchSnapshot()
    })
})