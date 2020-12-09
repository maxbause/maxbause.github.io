import React from "react"
import "@testing-library/jest-dom"
import { render, RenderOptions, RenderResult } from "@testing-library/react"
import { createGlobalStyle, ThemeProps, ThemeProvider } from "styled-components"
import { Theme, theme } from "../src/config/theme"

export const GlobalStyle = createGlobalStyle<ThemeProps<Theme>>`  
  html {
    font-size: 16px;
    font-family: "W95FA", sans;
    margin: 0 auto;
    color: ${({ theme }) => theme.font.colors.primary};
    background-color: ${({ theme }) => theme.backgrounds.default};
  }
`

const AllTheProviders = ({ children }: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      {children}
    </ThemeProvider>
  )
}

const customRender = (ui: JSX.Element, options?: RenderOptions): RenderResult =>
  render(ui, { wrapper: AllTheProviders, ...options })

export * from "@testing-library/react"

export { customRender as render }
