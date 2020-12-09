import React from "react"
import { ApplicationProps } from "../../../../../context/application/applicationContext"
import { withApplicationContext } from "../../../../../context/application/withApplicationContext"
import { Typography } from "../../../atoms/typography"
import { Window } from "../../../molecules/window"

const About = ({ id, applicationContextCloseApplication }: ApplicationProps): JSX.Element => {
  return (
    <Window
      title="Welcome"
      width={500}
      height={500}
      x={200}
      y={200}
      onClose={() => applicationContextCloseApplication(id)}
    >
      <Typography size="systemDefault" as="h3">
        Application: About <br />
        Window ID: {id}
      </Typography>
    </Window>
  )
}

export default withApplicationContext(About)
