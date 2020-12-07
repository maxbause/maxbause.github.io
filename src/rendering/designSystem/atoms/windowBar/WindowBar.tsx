import React from "react"
import styled, { ThemeProps, withTheme } from "styled-components"
import { Theme } from "../../../../config/theme"
import { Typography } from "../typography"

type StyledProps = ThemeProps<Theme>

const Wrapper = styled.div`
  width: 100%;
  height: 1.25rem;
  border-bottom: 0.125rem solid ${({ theme }: StyledProps) => theme.window.bar.borderColor};
  background-color: ${({ theme }: StyledProps) => theme.window.bar.backgroundColor};
  box-sizing: border-box;
  position: relative;
`

const Background = styled.svg`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: 1;
`

const CloseButton = styled.div`
  z-index: 1;
  position: absolute;
  left: 1rem;
  width: 0.875rem;
  height: 0.875rem;
  background-color: ${({ theme }: StyledProps) => theme.window.bar.backgroundColor};
  top: 50%;
  transform: translateY(-50%);
  border: 1px solid ${({ theme }: StyledProps) => theme.window.bar.borderColor};
  cursor: pointer;

  &::before {
    content: "";
    position: absolute;
    background-color: ${({ theme }: StyledProps) => theme.window.bar.backgroundColor};
    border: 1px solid ${({ theme }: StyledProps) => theme.window.bar.backgroundColor};
    height: 100%;
    top: -1px;
    left: -0.1875rem;
  }

  &::after {
    content: "";
    position: absolute;
    background-color: ${({ theme }: StyledProps) => theme.window.bar.backgroundColor};
    border: 1px solid ${({ theme }: StyledProps) => theme.window.bar.backgroundColor};
    height: 100%;
    top: -1px;
    right: -0.1875rem;
  }
`

const Title = styled.div`
  z-index: 1;
  position: absolute;
  background-color: ${({ theme }: StyledProps) => theme.window.bar.backgroundColor};
  top: 50%;
  left: 50%;
  transform: translateY(-50%) translateX(-50%);
  padding: 0 0.5rem;
`

type Props = React.HTMLAttributes<HTMLElement> &
  StyledProps & {
    title?: string
  }

export const WindowBar = withTheme(
  ({ title, theme, ...props }: Props): JSX.Element => {
    return (
      <Wrapper {...props}>
        <Background width="100%" height="100%">
          <rect width="100%" height="2px" y="2px" style={{ fill: theme.window.bar.borderColor }} />
          <rect width="100%" height="2px" y="6px" style={{ fill: theme.window.bar.borderColor }} />
          <rect width="100%" height="2px" y="10px" style={{ fill: theme.window.bar.borderColor }} />
          <rect width="100%" height="2px" y="14px" style={{ fill: theme.window.bar.borderColor }} />
          <rect
            width="100%"
            height="100%"
            style={{ fill: "transparent", stroke: theme.window.bar.backgroundColor, strokeWidth: "4px" }}
          />
        </Background>
        <CloseButton />
        {title ? (
          <Title>
            <Typography size="systemDefault">{title}</Typography>
          </Title>
        ) : null}
      </Wrapper>
    )
  },
)
