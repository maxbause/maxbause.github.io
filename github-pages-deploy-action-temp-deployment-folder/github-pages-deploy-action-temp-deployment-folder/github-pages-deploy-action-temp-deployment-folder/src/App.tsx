import React from "react"
import { createGlobalStyle, css, ThemeProps, ThemeProvider } from "styled-components"
import W95FAWOFF from "../assets/font/w95fa.woff"
import W95FAWOFF2 from "../assets/font/w95fa.woff2"
import { theme, Theme } from "./config/theme"
import { Typography } from "./rendering/designSystem/atoms/Typography"

const fonts = css`
  @font-face {
    font-family: "W95FA";
    src: url(${W95FAWOFF2}) format("woff2"), url(${W95FAWOFF}) format("woff");
  }
`

const GlobalStyle = createGlobalStyle<ThemeProps<Theme>>`
  ${fonts};
  
  html {
    font-size: 16px;
    font-family: "W95FA", sans;
    margin: 0 auto;
    color: ${({ theme }) => theme.font.colors.primary};
    background-color: ${({ theme }) => theme.backgrounds.default};
  }
`

export const App = (): JSX.Element => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Typography size="h1">Work in progress...</Typography>
    </ThemeProvider>
  )
}
