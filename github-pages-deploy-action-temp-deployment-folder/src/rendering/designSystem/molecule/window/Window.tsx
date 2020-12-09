import React from "react"
import styled from "styled-components"
import { WindowBar } from "../../atoms/windowBar"
import { WindowPane } from "../../atoms/windowPane"

type WrapperProps = {
  width: number
  height: number
  x: number
  y: number
  title?: string
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
  width: 100%;
  padding: 1rem;
`

export const Window = ({ title, children, ...props }: Props): JSX.Element => {
  return (
    <Wrapper {...props}>
      <WindowPane>
        <WindowBar title={title} />
        <WindowInner>{children}</WindowInner>
      </WindowPane>
    </Wrapper>
  )
}
