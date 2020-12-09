import React from "react"
import { ApplicationContext } from "./applicationContext"

export const withApplicationContext = (WrappedComponent: any) => (props?: React.HTMLAttributes<HTMLElement>) => {
  return (
    <ApplicationContext.Consumer>{(value) => <WrappedComponent {...props} {...value} />}</ApplicationContext.Consumer>
  )
}
