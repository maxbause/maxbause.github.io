import React from "react"
import { render } from "../../../../../test/test-utils"
import { Typography } from "./Typography"
import { screen } from "@testing-library/dom"

describe("rendering -> designSystem -> atoms -> <Typography />", () => {
  test("to render successfully", () => {
    render(<Typography size="h1">Test title</Typography>)
    expect(screen.getByText("Test title")).toBeVisible()
  })
})
