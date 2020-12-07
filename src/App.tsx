import React from "react"
import { createGlobalStyle, css, ThemeProps, ThemeProvider } from "styled-components"
import FONT_WOFF from "../assets/font/ChiKareGo2.woff"
import FONT_WOFF_2 from "../assets/font/ChiKareGo2.woff2"
import { theme, Theme } from "./config/theme"
import { Typography } from "./rendering/designSystem/atoms/typography"
import { Window } from "./rendering/designSystem/molecule/window"

const fonts = css`
  @font-face {
    font-family: "ChiKareGo2";
    src: url(${FONT_WOFF_2}) format("woff2"), url(${FONT_WOFF}) format("woff");
  }
`

const GlobalStyle = createGlobalStyle<ThemeProps<Theme>>`
  ${fonts};

  * {
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  html {
    font-size: 16px;
    font-family: "ChiKareGo2", sans;
    margin: 0 auto;
    color: ${({ theme }) => theme.font.colors.primary};
    background-color: ${({ theme }) => theme.backgrounds.default};
  }
`

export const App = (): JSX.Element => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Window title="Welcome" width={500} height={500} x={100} y={100}>
        <Typography size="systemDefault" as="h3">
          Hi, I&apos;m Max!
        </Typography>
        <Typography size="systemDefault" as="div" style={{ display: "block" }}>
          ... yep, this is still work in progress. please come pack later :)
          <br />
          <br />
          Font &quot;ChiKareGo2&quot; by{" "}
          <a href="http://www.pentacom.jp/pentacom/bitfontmaker2/gallery/?id=3780" rel="noreferrer" target="_blank">
            Giles Booth.
          </a>
        </Typography>
      </Window>
    </ThemeProvider>
  )
}
