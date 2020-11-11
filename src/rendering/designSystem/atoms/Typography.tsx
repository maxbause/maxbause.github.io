import React from "react"
import styled, { css, ThemeProps } from "styled-components"
import { Theme, theme } from "../../../config/theme"

type Props = {
  size: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "paragraph" | "lead" | "quote" | "muted" | "primary"
  color?: keyof typeof theme.font.colors
  marginBottom?: string
} & React.HTMLAttributes<HTMLElement>

type StyledProps = ThemeProps<Theme> & {
  color?: keyof typeof theme.font.colors
  marginLeft?: string
  marginRight?: string
  marginBottom?: string
}

const typoStyles = css`
  display: flex;
  margin: 0;
  font-size: ${({ theme }: StyledProps) => theme.font.typography.sizes.h1};
  font-weight: ${({ theme }: StyledProps) => theme.font.typography.weights.h1};
  line-height: ${({ theme }: StyledProps) => theme.font.typography.lineHeights.h1};
  color: ${({ theme, color }: StyledProps) => theme.font.colors[color] || theme.font.colors.primary};
  margin-left: ${({ marginLeft }: StyledProps) => marginLeft || 0};
  margin-right: ${({ marginRight }: StyledProps) => marginRight || 0};
  margin-bottom: ${({ marginBottom }: StyledProps) => marginBottom || 0};
`

const H1 = styled.h1`
  ${typoStyles};
  font-size: ${({ theme }: StyledProps) => theme.font.typography.sizes.h1};
  font-weight: ${({ theme }: StyledProps) => theme.font.typography.weights.h1};
  line-height: ${({ theme }: StyledProps) => theme.font.typography.lineHeights.h1};
`

const H2 = styled.h2`
  ${typoStyles};
  font-size: ${({ theme }: StyledProps) => theme.font.typography.sizes.h2};
  font-weight: ${({ theme }: StyledProps) => theme.font.typography.weights.h2};
  line-height: ${({ theme }: StyledProps) => theme.font.typography.lineHeights.h2};
`

const H3 = styled.h3`
  ${typoStyles};
  font-size: ${({ theme }: StyledProps) => theme.font.typography.sizes.h3};
  font-weight: ${({ theme }: StyledProps) => theme.font.typography.weights.h3};
  line-height: ${({ theme }: StyledProps) => theme.font.typography.lineHeights.h3};
`

const H4 = styled.h4`
  ${typoStyles};
  font-size: ${({ theme }: StyledProps) => theme.font.typography.sizes.h4};
  font-weight: ${({ theme }: StyledProps) => theme.font.typography.weights.h4};
  line-height: ${({ theme }: StyledProps) => theme.font.typography.lineHeights.h4};
`

const H5 = styled.h5`
  ${typoStyles};
  font-size: ${({ theme }: StyledProps) => theme.font.typography.sizes.h5};
  font-weight: ${({ theme }: StyledProps) => theme.font.typography.weights.h5};
  line-height: ${({ theme }: StyledProps) => theme.font.typography.lineHeights.h5};
`

const H6 = styled.h6`
  ${typoStyles};
  font-size: ${({ theme }: StyledProps) => theme.font.typography.sizes.h6};
  font-weight: ${({ theme }: StyledProps) => theme.font.typography.weights.h6};
  line-height: ${({ theme }: StyledProps) => theme.font.typography.lineHeights.h6};
`

const Paragraph = styled.p`
  ${typoStyles};
  font-size: ${({ theme }: StyledProps) => theme.font.typography.sizes.paragraph};
  font-weight: ${({ theme }: StyledProps) => theme.font.typography.weights.paragraph};
  line-height: ${({ theme }: StyledProps) => theme.font.typography.lineHeights.paragraph};
`

const Lead = styled.p`
  ${typoStyles};
  font-size: ${({ theme }: StyledProps) => theme.font.typography.sizes.lead};
  font-weight: ${({ theme }: StyledProps) => theme.font.typography.weights.lead};
  line-height: ${({ theme }: StyledProps) => theme.font.typography.lineHeights.lead};
`

const Quote = styled.p`
  ${typoStyles};
  font-size: ${({ theme }: StyledProps) => theme.font.typography.sizes.quote};
  font-weight: ${({ theme }: StyledProps) => theme.font.typography.weights.quote};
  line-height: ${({ theme }: StyledProps) => theme.font.typography.lineHeights.quote};
`

const Muted = styled.span`
  ${typoStyles};
  display: inline-flex;
  font-size: ${({ theme }: StyledProps) => theme.font.typography.sizes.muted};
  font-weight: ${({ theme }: StyledProps) => theme.font.typography.weights.muted};
  line-height: ${({ theme }: StyledProps) => theme.font.typography.lineHeights.muted};
`

const Primary = styled.span`
  ${typoStyles};
  display: inline-flex;
  font-size: ${({ theme }: StyledProps) => theme.font.typography.sizes.primary};
  font-weight: ${({ theme }: StyledProps) => theme.font.typography.weights.primary};
  line-height: ${({ theme }: StyledProps) => theme.font.typography.lineHeights.primary};
`

export const Typography = ({ size, children, ...props }: Props): JSX.Element => {
  switch (size) {
    case "h1":
      return <H1 {...props}>{children}</H1>
    case "h2":
      return <H2 {...props}>{children}</H2>
    case "h3":
      return <H3 {...props}>{children}</H3>
    case "h4":
      return <H4 {...props}>{children}</H4>
    case "h5":
      return <H5 {...props}>{children}</H5>
    case "h6":
      return <H6 {...props}>{children}</H6>
    case "paragraph":
      return <Paragraph {...props}>{children}</Paragraph>
    case "lead":
      return <Lead {...props}>{children}</Lead>
    case "quote":
      return <Quote {...props}>{children}</Quote>
    case "muted":
      return <Muted {...props}>{children}</Muted>
    case "primary":
      return <Primary {...props}>{children}</Primary>
  }
}
