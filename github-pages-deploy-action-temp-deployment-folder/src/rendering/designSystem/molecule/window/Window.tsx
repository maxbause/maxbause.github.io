import React from "react"
import styled, { ThemeProps } from "styled-components"
import { Theme } from "../../../../config/theme"
import { WindowBar } from "../../atoms/windowBar"
import { WindowPane } from "../../atoms/windowPane"

type StyledProps = ThemeProps<Theme>

type WrapperProps = {
  width: number
  height: number
  x: number
  y: number
}

type Props = React.HTMLAttributes<HTMLElement> & WrapperProps

const Wrapper = styled.div<WrapperProps>`
  position: absolute;
  top: ${({ y }) => y}px;
  left: ${({ x }) => x}px;
  width: ${({ width }) => width}px;
  height: ${({ height }) => height}px;
`

const WindowInner = styled.div`
  display: flex;
  flex-grow: 1;
  flex-direction: column;
  border-left: 1px solid ${({ theme }: StyledProps) => theme.window.pane.innerBorderColor};
  width: 100%;
  padding: 1rem;
`

export const Window = ({ children, ...props }: Props): JSX.Element => {
  return (
    <Wrapper {...props}>
      <WindowPane>
        <WindowBar />
        <WindowInner>{children}</WindowInner>
      </WindowPane>
    </Wrapper>
  )
}
