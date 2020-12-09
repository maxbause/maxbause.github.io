import React from "react"
import { About } from "../../rendering/designSystem/organisms/apps/about"
import { v4 } from "uuid"

enum Applications {
  ABOUT = "ABOUT",
}

export type ApplicationContextProps = {
  applicationContextStartApplication: (application: keyof typeof Applications) => void
  applicationContextCloseApplication: (id: string) => void
}

export type ApplicationProps = ApplicationContextProps & {
  id: string
}

export const ApplicationContext = React.createContext<ApplicationContextProps>({
  applicationContextStartApplication: () => {},
  applicationContextCloseApplication: () => {},
})

export const ApplicationContextProvider = ({ children }: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const bootstrapApplication = React.useCallback((application: keyof typeof Applications): [string, JSX.Element] => {
    const id = v4()

    switch (application) {
      case "ABOUT":
        return [id, <About key={id} id={id} />]
    }
  }, [])

  const applicationReducer = React.useCallback(
    (
      state: Map<string, JSX.Element>,
      payload: { action: "start" | "close"; application?: Applications; id?: string },
    ) => {
      const tempMap = new Map(state)
      switch (payload.action) {
        case "start":
          tempMap.set(...bootstrapApplication(payload.application))
          break
        case "close":
          tempMap.delete(payload.id)
          break
      }

      return tempMap
    },
    [],
  )

  const [applications, applicationsDispatch] = React.useReducer(applicationReducer, new Map<string, JSX.Element>())

  const applicationContextStartApplication = React.useCallback((application: Applications) => {
    console.debug("Starting application: ", application)
    applicationsDispatch({ action: "start", application })
  }, [])

  const applicationContextCloseApplication = React.useCallback((id: string) => {
    console.debug("Closing application: ", id)
    applicationsDispatch({ action: "close", id })
  }, [])

  const providerState = React.useMemo<ApplicationContextProps>(
    () => ({
      applicationContextStartApplication,
      applicationContextCloseApplication,
    }),
    [],
  )

  const renderApplications = React.useMemo(() => {
    const elements: JSX.Element[] = []
    applications.forEach((val) => elements.push(val))
    return elements
  }, [applications])

  return (
    <ApplicationContext.Provider value={providerState}>
      {children} {renderApplications}
    </ApplicationContext.Provider>
  )
}
