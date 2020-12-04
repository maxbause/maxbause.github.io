export type Theme = {
  backgrounds: {
    default: string
  }
  font: {
    colors: {
      primary: string
    }
    typography: {
      sizes: {
        h1: string
        h2: string
        h3: string
        h4: string
        h5: string
        h6: string
        paragraph: string
        lead: string
        quote: string
        muted: string
        primary: string
      }
      lineHeights: {
        h1: string
        h2: string
        h3: string
        h4: string
        h5: string
        h6: string
        paragraph: string
        lead: string
        quote: string
        muted: string
        primary: string
      }
      weights: {
        h1: string
        h2: string
        h3: string
        h4: string
        h5: string
        h6: string
        paragraph: string
        lead: string
        quote: string
        muted: string
        primary: string
      }
    }
  }
}

export const theme: Theme = {
  backgrounds: {
    default: "#008081",
  },
  font: {
    colors: {
      primary: "#000000",
    },
    typography: {
      sizes: {
        h1: "2.5rem",
        h2: "2rem",
        h3: "1.75rem",
        h4: "1.5rem",
        h5: "1.25rem",
        h6: "1rem",
        paragraph: "0.6rem",
        lead: "0.9rem",
        quote: "0.6rem",
        muted: "0.6rem",
        primary: "0.6rem",
      },
      lineHeights: {
        h1: "3rem",
        h2: "2.4rem",
        h3: "2.1rem",
        h4: "1.8rem",
        h5: "1.5rem",
        h6: "1.2rem",
        paragraph: "1.2rem",
        lead: "1.8rem",
        quote: "1.2rem",
        muted: "1.2rem",
        primary: "1.2rem",
      },
      weights: {
        h1: "400",
        h2: "400",
        h3: "400",
        h4: "400",
        h5: "400",
        h6: "400",
        paragraph: "300",
        lead: "300",
        quote: "300",
        muted: "300",
        primary: "300",
      },
    },
  },
}
