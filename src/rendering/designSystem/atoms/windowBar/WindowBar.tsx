import styled, { ThemeProps } from "styled-components"
import { Theme } from "../../../../config/theme"

type StyledProps = ThemeProps<Theme>

export const WindowBar = styled.div`
  width: 100%;
  height: 1rem;
  border-left: 1px solid ${({ theme }: StyledProps) => theme.window.pane.innerBorderColor};
  border-top: 1px solid ${({ theme }: StyledProps) => theme.window.pane.innerBorderColor};
  box-sizing: border-box;
`
