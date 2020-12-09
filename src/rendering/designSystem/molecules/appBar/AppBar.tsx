import React from "react"
import styled, { ThemeProps } from "styled-components"
import { Theme } from "../../../../config/theme"
import { ApplicationContextProps } from "../../../../context/application/applicationContext"
import { withApplicationContext } from "../../../../context/application/withApplicationContext"
import { Typography } from "../../atoms/typography"

type StyledProps = ThemeProps<Theme>

const Wrapper = styled.div`
  display: flex;
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  background-color: ${({ theme }: StyledProps) => theme.appBar.backgroundColor};
  border-bottom: 0.125rem solid ${({ theme }: StyledProps) => theme.appBar.borderColor};
  padding: 0.125rem 0.5rem;
`

const Button = styled(Typography)`
  padding: 0 0.375rem;
  cursor: pointer;
`

const Clock = styled(Typography)`
  display: flex;
  flex-grow: 1;
  justify-content: flex-end;
`

const AppBar = ({ applicationContextStartApplication }: ApplicationContextProps): JSX.Element => {
  const dateUpdate = React.useCallback((): string => {
    const date = new Date()
    const hours = date.getHours().toString().padStart(2, "0")
    const minutes = date.getMinutes().toString().padStart(2, "0")
    const day = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"][date.getDay()]
    const month = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"][date.getMonth()]

    return `${hours}:${minutes} - ${day} ${date.getDate()} ${month} ${date.getFullYear()}`
  }, [])

  const [dateString, setDateString] = React.useState<string>(() => dateUpdate())

  React.useEffect(() => {
    const interval = setInterval(() => setDateString(dateUpdate()), 1000)
    return () => {
      clearInterval(interval)
    }
  }, [])

  return (
    <Wrapper>
      <Typography size="systemDefault">Max Bause</Typography>
      <Button size="systemDefault" marginLeft="0.375rem">
        <u>T</u>heme
      </Button>
      <Button size="systemDefault" onClick={() => applicationContextStartApplication("ABOUT")}>
        <u>A</u>bout
      </Button>
      <Clock size="systemDefault">
        <span>{dateString}</span>
      </Clock>
    </Wrapper>
  )
}

export default withApplicationContext(AppBar)
