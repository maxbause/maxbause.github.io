import React from "react"
import styled, { css, ThemeProps } from "styled-components"
import { Theme, theme } from "../../../../config/theme"

type Props = {
  size: "systemDefault"
  color?: keyof typeof theme.font.colors
  marginBottom?: string
} & React.HTMLAttributes<HTMLElement>

type StyledProps = ThemeProps<Theme> & {
  color?: keyof typeof theme.font.colors
  marginLeft?: string
  marginRight?: string
  marginBottom?: string
}

const systemDefault = css`
  display: flex;
  margin: 0;
  font-size: ${({ theme }: StyledProps) => theme.font.typography.sizes.systemDefault};
  font-weight: ${({ theme }: StyledProps) => theme.font.typography.weights.systemDefault};
  line-height: ${({ theme }: StyledProps) => theme.font.typography.lineHeights.systemDefault};
  color: ${({ theme, color }: StyledProps) => theme.font.colors[color] || theme.font.colors.primary};
  margin-left: ${({ marginLeft }: StyledProps) => marginLeft || 0};
  margin-right: ${({ marginRight }: StyledProps) => marginRight || 0};
  margin-bottom: ${({ marginBottom }: StyledProps) => marginBottom || 0};
`

export const Typography = styled.div<Props>`
  ${(props) => {
    switch (props.size) {
      case "systemDefault":
        return systemDefault
      default:
        return systemDefault
    }
  }};
`
