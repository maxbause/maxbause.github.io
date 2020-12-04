import styled, { ThemeProps } from "styled-components"
import { Theme } from "../../../../config/theme"

type StyledProps = ThemeProps<Theme>

export const WindowPane = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  background-color: ${({ theme }: StyledProps) => theme.window.pane.backgroundColor};
  border: 1px solid ${({ theme }: StyledProps) => theme.window.pane.borderColor};
  box-shadow: 2px 2px 0px 0px rgba(0, 0, 0, 0.5);
`
